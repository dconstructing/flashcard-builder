import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';

import googleClientLoader from '../lib/googleClient';

class FilePickerGoogleDrive extends React.Component {
  props: {
    clientId: string,
    onDataChange: (Array<Array<string>>) => {}
  };
  
  state = {
    anchor: null,
    authed: false,
    files: [],
    open: false,
    selectedFileId: null,
  };

  componentDidMount = () => {
    googleClientLoader.load().then((googleClient) => {
      console.log('google client loaded', googleClient);
      this.googleClient = googleClient;
    });
  };
  
  handleButtonClick = (event) => {
    console.log('do google drive stuff', event);
    event.preventDefault();
    this.googleClient.listSpreadsheets().then((files) => {
      this.setState({
        files: files,
      });
    });
    this.setState({
      anchor: event.currentTarget,
      open: true,
    });
  };

  handleFileSelected = (event, value) => {
    this.setState({
      open: false,
      selectedFileId: value
    });
    this.googleClient.loadFileData(value).then((data) => {
      this.props.onDataChange(data);
    });
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
