import styled from 'styled-components';

export const AppWrapper = styled.div`
	overflow: hidden;
	color: ${({ theme }) => theme.colors.black};
	background-color: ${({ theme }) => theme.colors.bgColor};
	padding: 1rem;
`;

export const FirstBlur = styled.div`
	position: absolute;
	width: 22rem;
	height: 14rem;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.blue};
	filter: blur(72px);
	top: -18%;
	right: 0;
`;

export const SecondBlur = styled.div`
	position: absolute;
	width: 22rem;
	height: 14rem;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.blue};
	filter: blur(72px);
	top: 36%;
	left: -8rem;
`;
