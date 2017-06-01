import React from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Surface from '../Surface';

const muiTheme = getMuiTheme({
  fontFamily: 'Open Sans',
});

class App2 extends React.Component {
  props: {
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Surface />
      </MuiThemeProvider>
    );
  }
}

export default App2;
