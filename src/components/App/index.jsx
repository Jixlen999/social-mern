/* eslint-disable no-unused-vars */
import { MantineProvider } from '@mantine/core';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../globalStyles';

import AuthPage from '@/pages/AuthPage';
import HomePage from '@/pages/HomePage';
import ProfilePage from '@/pages/ProfilePage';
import { theme } from '@/theme';

import { AppWrapper, FirstBlur, SecondBlur } from './styled';

function App() {
	const user = useSelector((state) => state.authReducer.authData);
	return (
		<ThemeProvider theme={theme}>
			<MantineProvider withGlobalStyles withNormalizeCSS>
				<GlobalStyle />
				<AppWrapper>
					<FirstBlur />
					<SecondBlur />
					<Routes>
						<Route
							path="/"
							element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
						/>
						<Route
							path="/home"
							element={user ? <HomePage /> : <Navigate to="../auth" />}
						/>
						<Route
							path="/auth"
							element={user ? <Navigate to="../home" /> : <AuthPage />}
						/>
					</Routes>
				</AppWrapper>
			</MantineProvider>
		</ThemeProvider>
	);
}

export default App;
