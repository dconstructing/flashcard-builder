import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App2 from './App2';

injectTapEventPlugin();

ReactDOM.render(
	<App2 />,
	document.getElementById('root')
);
