// @flow
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Surface from '../Surface';

const muiTheme = getMuiTheme({
	fontFamily: 'Open Sans',
});

function App2() {
	return (
		<MuiThemeProvider muiTheme={muiTheme}>
			<Surface />
		</MuiThemeProvider>
	);
}

export default App2;
