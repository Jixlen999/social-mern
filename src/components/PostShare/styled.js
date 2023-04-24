import styled from 'styled-components';

import Button from '@/components/Button';

export const PostShareWrapper = styled.div`
	display: flex;
	gap: 1rem;
	background-color: ${({ theme }) => theme.colors.cardColor};
	padding: 1rem;
	border-radius: 1rem;
`;
export const Image = styled.img`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
`;

export const InputAndOptionsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	gap: 1rem;
`;

export const Input = styled.input`
	background-color: ${({ theme }) => theme.colors.inputColor};
	border-radius: 10px;
	padding: 10px;
	font-size: 17px;
	border: none;
	outline: none;
`;

export const PostOptions = styled.div`
	display: flex;
	justify-content: space-around;
`;
export const Option = styled.div`
	padding: 5px 10px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	cursor: pointer;
	&:hover {
	}
`;

export const Photo = styled.div`
	color: ${({ theme }) => theme.colors.photo};
`;

export const Video = styled.div`
	color: ${({ theme }) => theme.colors.video};
`;

export const Location = styled.div`
	color: ${({ theme }) => theme.colors.location};
`;

export const Schedule = styled.div`
	color: ${({ theme }) => theme.colors.schedule};
`;

export const StyledButton = styled(Button)`
	padding: 5px 20px;
	font-size: 12px;
`;

export const ImageWrapper = styled.div`
	display: none;
`;

export const PreviewImage = styled.div`
	position: relative;
	& > svg {
		position: absolute;
		cursor: pointer;
		right: 1rem;
		top: 1rem;
	}
`;

export const ChosenImage = styled.img`
	width: 100%;
	max-height: 30rem;
	object-fit: contain;
	border-radius: 0.5rem;
`;
