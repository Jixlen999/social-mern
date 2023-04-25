import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from '@/components/App';

import GlobalStyle from './globalStyles';
import store from './store/ReduxStore';
import { theme } from './theme';

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<MantineProvider withGlobalStyles withNormalizeCSS>
				<GlobalStyle />
				<App />
			</MantineProvider>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);
