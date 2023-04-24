import styled from 'styled-components';

import Button from '@/components/Button';

export const InfoCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 1rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.colors.cardColor};
	width: 100%;
`;

export const Info = styled.div``;

export const StyledButton = styled(Button)`
	width: 7rem;
	height: 2rem;
	margin-top: 6rem;
	align-self: flex-end;
`;

export const InfoHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const EditButton = styled.div`
	cursor: pointer;
`;

// export const StyledButton = styled.div``;

// export const StyledButton = styled.div``;
