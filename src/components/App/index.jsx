/* eslint-disable no-unused-vars */
import AuthPage from '@/pages/AuthPage';
import HomePage from '@/pages/HomePage';
import ProfilePage from '@/pages/ProfilePage';

import { AppWrapper, FirstBlur, SecondBlur } from './styled';

function App() {
	return (
		<AppWrapper>
			<FirstBlur />
			<SecondBlur />
			{/* <HomePage /> */}
			{/* <ProfilePage /> */}
			<AuthPage />
		</AppWrapper>
	);
}

export default App;
