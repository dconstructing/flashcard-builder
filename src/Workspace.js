import React from 'react';
import gapi from 'gapi';

import FlatButton from 'material-ui/FlatButton';

import Card from './Card';
import Selector from './Selector';

const headerStyle = {
  borderBottom: '1px solid black',
  display: 'flex',
  justifyContent: 'space-between'
};
const titleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginRight: 10,
  verticalAlign: 'top'
};
const cardStyle = {
  border: '1px solid black',
  margin: 20,
  padding: 20
};
const footerStyle = {
  backgroundColor: '#ffffff',
  borderTop: '1px solid black',
  bottom: 0,
  position: 'absolute',
  width: '100%'
};
const templateHolderStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  margin: '20px 0'
};
const templateEditorStyle = {
  height: 100,
  width: '35%'
};

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
      footerOpen: false,
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

  toggleFooter = () => {
    this.setState({
      footerOpen: !this.state.footerOpen
    });
  }

  frontTemplateChanged = (event) => {
    this.setState({
      frontTemplate: event.target.value
    });
  }

  backTemplateChanged = (event) => {
    this.setState({
      backTemplate: event.target.value
    });
  }

  render() {
    const rows = this.state.file.values || [];
    return(
      <div>
        {
          this.state.sheets
          ?
          <div>
            <header style={headerStyle}>
              <div>
                <span style={titleStyle}>Flashcard Builder ></span>
                <Selector
                  files={this.state.files}
                  onSelected={this.fileSelected}
                />
              </div>
              <div>
                <a href="https://www.paypal.me/davidgawaincox">Donate</a>
              </div>
            </header>
            {
              rows.length > 0
              ?
              <div>
                <p>Tap card to flip</p>
                {
                  rows.map((row, i) => {
                    return (
                      <Card
                        key={i}
                        style={cardStyle}
                        data={row}
                        frontTemplate={this.state.frontTemplate}
                        backTemplate={this.state.backTemplate}
                      />
                    );
                  })
                }
              </div>
              :
              <p>Select a file</p>
            }
            <footer style={footerStyle}>
              {
                this.state.footerOpen
                ?
                <div>
                  <FlatButton
                    label="Hide card templates"
                    primary={true}
                    onClick={this.toggleFooter}
                  />
                  <div style={templateHolderStyle}>
                    <textarea
                      name="frontTemplateField"
                      style={templateEditorStyle}
                      defaultValue={this.state.frontTemplate}
                      onBlur={this.frontTemplateChanged}
                    />
                    <textarea
                      name="backTemplateField"
                      style={templateEditorStyle}
                      defaultValue={this.state.backTemplate}
                      onBlur={this.backTemplateChanged}
                    />
                    <div>
                      <ul>
                        <li>One of each template will be renderd for each row of your spreadsheet</li>
                        <li>When rendered, <code>{'{'}{'{'}col1{'}'}{'}'}</code> will be replace with the data in the first column of the row</li>
                        <li>Similarly, You can use <code>{'{'}{'{'}col2{'}'}{'}'}</code>, <code>{'{'}{'{'}col3{'}'}{'}'}</code>, etc to render other columns of data</li>
                        <li>Use standard HTML syntax in template</li>
                        <li>Templates will reset when page reloads</li>
                      </ul>
                    </div>
                  </div>
                </div>
                :
                <div>
                  <FlatButton
                    label="Edit card templates"
                    primary={true}
                    onClick={this.toggleFooter}
                  />
                </div>
              }
            </footer>
          </div>
          :
          <p>Loading ...</p>
        }
      </div>
    );
  }
}

export default Workspace;
