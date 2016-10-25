import gapi from 'gapi';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from './Login';
import Workspace from './Workspace';

const CLIENT_ID = '594524984428-ri54vus01s2c57iqp2i8cmr5l67n9g2s.apps.googleusercontent.com';
const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets.readonly',
  'https://www.googleapis.com/auth/drive.metadata.readonly'
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadGoogle();

    this.state = {
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

  requestLogin = () => {
    console.log('login requested');
    gapi.auth.authorize({
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: false
    }, this.handleAuthResult);
  };

  requestLogout = () => {};

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Login
            authorized={this.state.google}
            onLoginRequest={this.requestLogin}
            onLogoutRequest={this.requestLogout}
          />
          <Workspace google={this.state.google} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
