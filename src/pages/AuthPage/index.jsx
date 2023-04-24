/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Logo from '@/assets/logo.png';

import {
	AuthForm,
	AuthInput,
	AuthLeft,
	AuthRight,
	AuthWrapper,
	LoginHint,
	LoginRight,
	LogoDescription,
	LogoText,
	StyledButton,
	StyledLogo,
	WebName,
} from './styled';

function AuthPage() {
	return (
		<AuthWrapper>
			<AuthLeft>
				<StyledLogo src={Logo} alt="logo" />
				<WebName>
					<LogoText>JIX Media</LogoText>
					<LogoDescription>
						Explore the ideas throughout the world
					</LogoDescription>
				</WebName>
			</AuthLeft>
			{/* <SignUp /> */}
			<LigIn />
		</AuthWrapper>
	);
}

function SignUp() {
	return (
		<AuthRight>
			<AuthForm>
				<h3>Sign Up</h3>
				<div>
					<AuthInput type="text" name="firstName" placeholder="First Name" />
					<AuthInput type="text" name="lastName" placeholder="Last Name" />
				</div>
				<div>
					<AuthInput type="text" name="userName" placeholder="User Name" />
				</div>
				<div>
					<AuthInput type="password" name="password" placeholder="Password" />
					<AuthInput
						type="password"
						name="confirmPass"
						placeholder="Confirm Password"
					/>
				</div>
				<div>
					<LoginHint>Already have an account? Log in</LoginHint>
				</div>

				<StyledButton type="submit">Sign up</StyledButton>
			</AuthForm>
		</AuthRight>
	);
}

function LigIn() {
	return (
		<LoginRight>
			<AuthForm>
				<h3>Log in</h3>
				<div>
					<AuthInput type="text" name="userName" placeholder="User Name" />
				</div>
				<div>
					<AuthInput type="password" name="password" placeholder="Password" />
				</div>

				<div>
					<LoginHint>Don't have an account? Sign in</LoginHint>
				</div>

				<StyledButton type="submit">Log in</StyledButton>
			</AuthForm>
		</LoginRight>
	);
}

export default AuthPage;
