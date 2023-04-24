import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from '@/components/App';

import GlobalStyle from './globalStyles';
import { theme } from './theme';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<GlobalStyle />
			<App />
		</MantineProvider>
	</ThemeProvider>,
	document.getElementById('root')
);
