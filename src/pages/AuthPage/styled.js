import styled from 'styled-components';

import Button from '@/components/Button';

export const AuthWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	gap: 4rem;
	position: relative;
`;
export const AuthLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;

export const StyledLogo = styled.img`
	width: 4rem;
	height: 4rem;
`;
export const WebName = styled.div``;
export const LogoText = styled.h1`
	font-size: 3rem;
	background-color: red;
	background-image: ${({ theme }) => theme.colors.buttonBg};
	background-size: 100%;
	background-repeat: repeat;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
`;
export const LogoDescription = styled.h6`
	font-size: 0.85rem;
`;

export const AuthRight = styled.div``;
export const LoginRight = styled.div`
	width: auto;
	min-width: 400px;
`;

export const AuthForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	background-color: ${({ theme }) => theme.colors.cardColor};
	border-radius: 1rem;
	padding: 1rem;

	& > div {
		display: flex;
		gap: 1rem;
		height: 2rem;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
`;
export const AuthInput = styled.input`
	border: none;
	outline: none;
	border-radius: 8px;
	padding: 20px;
	flex: 1;
	background-color: ${({ theme }) => theme.colors.inputColor};
`;

export const StyledButton = styled(Button)`
	width: 6rem;
	height: 2rem;
	align-self: flex-end;
`;

export const LoginHint = styled.span`
	font-size: 12px;
`;
