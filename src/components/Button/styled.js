import styled from 'styled-components';

export const ButtonWrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.white};
	border-radius: 0.5rem;
	background: ${({ theme }) => theme.colors.buttonBg};
	border: 2px solid ${({ theme }) => theme.colors.white};
	transition: all 100ms ease-out;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.orange};
		background: transparent;
		border: 2px solid ${({ theme }) => theme.colors.orange};
	}
	&:disabled {
		border: none;
		background: silver;
		pointer-events: none;
	}
`;
