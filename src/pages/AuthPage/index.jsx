/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logIn, signUp } from '@/actions/AuthAction';
import Logo from '@/assets/logo.png';

import {
	AuthForm,
	AuthInput,
	AuthLeft,
	AuthRight,
	AuthWrapper,
	ConfirmError,
	Hint,
	LogoDescription,
	LogoText,
	StyledButton,
	StyledLogo,
	WebName,
} from './styled';

function AuthPage() {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.authReducer.loading);
	const [isSignUp, setIsSignUp] = useState(true);
	const initialFormValues = {
		userName: '',
		firstName: '',
		lastName: '',
		password: '',
		confirmPass: '',
	};
	const [data, setData] = useState(initialFormValues);
	const [confirmPass, setConfirmPass] = useState(true);

	const handleChange = ({ target }) => {
		setData({ ...data, [target.name]: target.value });
		if (target.name === 'confirmPass') {
			setConfirmPass(true);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (isSignUp) {
			if (data.password === data.confirmPass) {
				dispatch(signUp(data));
			} else {
				setConfirmPass(false);
			}
		} else {
			dispatch(logIn(data));
		}
	};

	const resetForm = () => {
		setConfirmPass(true);
		setData(initialFormValues);
	};

	const handleClick = () => {
		setIsSignUp((prev) => !prev);
		resetForm();
	};

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
			<AuthRight>
				<AuthForm onSubmit={handleSubmit}>
					<h3>{isSignUp ? 'Sign Up' : 'Log in'}</h3>
					{isSignUp && (
						<div>
							<AuthInput
								type="text"
								name="firstName"
								placeholder="First Name"
								onChange={handleChange}
								value={data.firstName}
							/>
							<AuthInput
								type="text"
								name="lastName"
								placeholder="Last Name"
								onChange={handleChange}
								value={data.lastName}
							/>
						</div>
					)}
					<div>
						<AuthInput
							type="text"
							name="userName"
							placeholder="User Name"
							onChange={handleChange}
							value={data.userName}
						/>
					</div>
					<div>
						<AuthInput
							type="password"
							name="password"
							placeholder="Password"
							onChange={handleChange}
							value={data.password}
						/>
						{isSignUp && (
							<AuthInput
								type="password"
								name="confirmPass"
								placeholder="Confirm Password"
								onChange={handleChange}
								value={data.confirmPass}
							/>
						)}
					</div>
					{isSignUp && !confirmPass && (
						<ConfirmError>* Confirm Password is not the same</ConfirmError>
					)}
					<div>
						<Hint onClick={handleClick}>
							{isSignUp
								? 'Already have an account? Log in!'
								: "Don't have an account? Sign up!"}
						</Hint>
					</div>
					<StyledButton type="submit" disabled={loading}>
						{loading ? 'Loading..' : isSignUp ? 'Sign up' : 'Log in'}
					</StyledButton>
				</AuthForm>
			</AuthRight>
		</AuthWrapper>
	);
}

export default AuthPage;
