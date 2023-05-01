import styled from 'styled-components';

export const PostWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.cardColor};
	border-radius: 1rem;
	gap: 1rem;
`;

export const PostReact = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1.5rem;
	img {
		cursor: pointer;
	}
`;

export const Details = styled.div``;

export const Image = styled.img`
	width: 100%;
	max-height: 40rem;
	object-fit: cover;
	border-radius: 0.5rem;
`;

export const Likes = styled.div`
	font-size: 12px;
	color: ${({ theme }) => theme.colors.gray};
`;
