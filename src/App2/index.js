import React from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Surface from '../Surface';

class App2 extends React.Component {
  props: {
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Surface />
      </MuiThemeProvider>
    );
  }
}

export default App2;
