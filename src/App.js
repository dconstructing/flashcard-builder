import gapi from 'gapi';
import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import Header from './Header';
import Login from './Login';
import Selector from './Selector';
import Workspace from './Workspace';

const CLIENT_ID = '594524984428-ri54vus01s2c57iqp2i8cmr5l67n9g2s.apps.googleusercontent.com';
const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets.readonly',
  'https://www.googleapis.com/auth/drive.metadata.readonly'
];

const appWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
};
const titleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginRight: 10,
  verticalAlign: 'top'
};
const workspaceWrapperStyle = {
  display: 'flex',
  flex: '1'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadGoogle();

    this.state = {
      files: [],
      file: {},
      google: false
    };
  }

  handleAuthResult = (authResult) => {
    console.log('handling auth result', this);
    if (authResult && !authResult.error) {
      console.log('auth is good');
      this.setState({
        google: true
      });
      Promise.all([this.loadDriveApi(), this.loadSheetsApi()]).then(() => {
        this.loadFiles();
      });
    } else {
      console.log('auth error', authResult);
    }
  };

  checkGoogleAuth = () => {
    console.log('checking Google Auth', this);
    gapi.auth.authorize({
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, this.handleAuthResult);
  };

  loadGoogle = () => {
    gapi.load('client', this.checkGoogleAuth);
  };

  loadDriveApi = () => {
    return gapi.client.load('drive', 'v3');
  };

  loadSheetsApi = () => {
    var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
    return gapi.client.load(discoveryUrl);
  };

  loadFiles = () => {
    console.log('loading files')
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

  requestLogin = () => {
    console.log('login requested');
    gapi.auth.authorize({
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: false
    }, this.handleAuthResult);
  };

  requestLogout = () => {};

  fileSelected = (fileId) => {
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
      this.setState({
        file: response.result
      });
    }, (reason) => {
      console.error(reason.result.error.message);
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div style={appWrapperStyle}>
          <Header>
            <div>
              <span style={titleStyle}>Flashcard Builder ></span>
              <Selector
                files={this.state.files}
                onSelected={this.fileSelected}
              />
            </div>
            <div>
              <Login
                authorized={this.state.google}
                onLoginRequest={this.requestLogin}
                onLogoutRequest={this.requestLogout}
              />
              <p>
                Donate with:
                <a href="https://www.paypal.me/davidgawaincox">PayPal</a>
                -
                <a href="https://cash.me/$davidgawaincox">Square Cash</a>
              </p>
            </div>
          </Header>
          <div style={workspaceWrapperStyle}>
            {
              Object.keys(this.state.file).length === 0
              ?
              <div>
                <p>Select a file</p>
              </div>
              :
              <Workspace file={this.state.file} />
            }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
