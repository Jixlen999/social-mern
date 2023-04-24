import styled from 'styled-components';

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: ${({ theme }) => theme.colors.cardColor};
	padding: 1rem;
	border-radius: 1rem;
	padding-left: 2rem;
`;
export const Trend = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
export const TrendName = styled.span`
	font-weight: bold;
`;
export const TrendShares = styled.span`
	font-size: 13px;
`;
