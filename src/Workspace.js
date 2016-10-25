import React from 'react';
import gapi from 'gapi';

import Card from './Card';
import Selector from './Selector';

class Workspace extends React.Component {
  static propTypes = {
    google: React.PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      drive: false,
      sheets: false,
      files: [],
      file: {},
      frontTemplate: '<p>{{col1}}</p>',
      backTemplate: '<p>{{col2}}</p>'
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('received', nextProps);
    if (nextProps.google !== this.props.google && nextProps.google === true) {
      this.loadDriveApi().then(() => {
        this.setState({
          drive: true
        });
        return this.loadSheetsApi();
      }, (error) => {
        console.error('API loading error', error);
      }).then(() => {
        this.setState({
          sheets: true
        });
        return this.loadFiles();
      }, (error) => {
        console.error('File loading error', error);
      });
    }
  }

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
      pageSize: 10
      // fields: "nextPageToken, files(id, name)"
    }).execute((response) => {
      console.log('loaded files', response.files);
      this.setState({
        files: response.files
      });
    });
  };

  fileSelected = (fileId) => {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: fileId,
      range: 'Sheet1'
    }).then((response) => {
      this.setState({
        file: response.result
      });
    });
  };

  render() {
    const rows = this.state.file.values || [];
    return(
      <div>
        {
          this.state.sheets
          ?
          <div>
            <Selector
              files={this.state.files}
              onSelected={this.fileSelected}
            />
            {
              rows.map((row) => {
                return (
                  <Card
                    data={row}
                    frontTemplate={this.state.frontTemplate}
                    backTemplate={this.state.backTemplate}
                  />
                );
              })
            }
          </div>
          :
          <p>Loading ...</p>
        }
      </div>
    );
  }
}

export default Workspace;
