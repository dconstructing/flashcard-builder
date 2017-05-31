import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';

const CLIENT_ID = '594524984428-ri54vus01s2c57iqp2i8cmr5l67n9g2s.apps.googleusercontent.com';
const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets.readonly',
  'https://www.googleapis.com/auth/drive.metadata.readonly'
];

class FilePickerGoogleDrive extends React.Component {
  props: {
    clientId: string,
    onDataChange: (Array<Array<string>>) => {}
  };

  constructor(props) {
    super(props);
    
    this.state = {
      anchor: null,
      authed: false,
      files: [],
      open: false,
      selectedFileId: null,
    };
  }
  
  handleButtonClick = (event) => {
    console.log('do google drive stuff', event);
    event.preventDefault();
    gapi.load('client', this.checkGoogleAuth);
    this.setState({
      anchor: event.currentTarget,
      open: true,
    });
  };
  
  checkGoogleAuth = () => {
    console.log('checking Google Auth', this);
    gapi.auth.authorize({
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, this.handleAuthResult);
  };

  handleAuthResult = (authResult) => {
    console.log('handling auth result', this);
    if (authResult && !authResult.error) {
      console.log('auth is good');
      this.setState({
        authed: true
      });
      Promise.all([this.loadDriveApi(), this.loadSheetsApi()]).then(() => {
        this.loadFiles();
      });
    } else {
      console.log('auth error', authResult);
    }
  };

  loadDriveApi = () => {
    return gapi.client.load('drive', 'v3');
  };

  loadSheetsApi = () => {
    var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
    return gapi.client.load(discoveryUrl);
  };

  loadFiles = () => {
    console.log('loading files');
    gapi.client.drive.files.list({
      q: 'mimeType="application/vnd.google-apps.spreadsheet"'
      // fields: "nextPageToken, files(id, name)"
    }).execute((response) => {
      console.log('loaded files', response.files);
      this.setState({
        files: response.files
      });
    });
  };
  
  loadFileData = (fileId) => {
    console.log('file selected', fileId, gapi.client.sheets);
    gapi.client.sheets.spreadsheets.get({
      spreadsheetId: fileId
    }).then((response) => {
      console.log('sheet loaded', response.result.sheets);
      const spreadsheet = response.result;
      if (spreadsheet.sheets.length < 1) {
        throw new Error('Spreadsheet does not have sheets');
      }
      const sheetName = spreadsheet.sheets[0].properties.title;
      return gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: fileId,
        range: sheetName
      })
    }).then((response) => {
      console.log('data loaded', response.result);
      this.props.onDataChange(response.result.values);
    }, (reason) => {
      console.error(reason.result.error.message);
    });
  };
  
  handleFileSelected = (event, value) => {
    this.setState({
      open: false,
      selectedFileId: value
    });
    this.loadFileData(value);
  };
  
  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          label="Google Drive"
          onClick={this.handleButtonClick}
        />
        {
          this.state.files.length > 0
          ?
            <Popover
              open={this.state.open}
              style={{maxWidth: 300, maxHeight: 400, overflowY: 'auto'}}
              anchorEl={this.state.anchor}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
            >
              <Menu
                value={this.state.selectedFileId}
                onChange={this.handleFileSelected}
              >
                {
                  this.state.files.map((file) => {
                    return (
                      <MenuItem
                        key={file.id}
                        value={file.id}
                        primaryText={file.name}
                      />
                    );
                  })
                }
              </Menu>
            </Popover>
          :
          null
        }
      </div>
    );
  }
}

export default FilePickerGoogleDrive;
