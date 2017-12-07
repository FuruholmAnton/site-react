import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

import galite from 'ga-lite'
galite('create', 'UA-50142288-1', 'auto')
galite('send', 'pageview')

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import './router';

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
);

// Hot Module Replacement API
// Only for development
if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
			document.getElementById('root')
		);
	});
}
