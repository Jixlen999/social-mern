import styled from 'styled-components';

import Button from '@/components/Button';

export const Follower = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const FollowerImage = styled.img`
	width: 3rem;
	height: 3.2rem;
	border-radius: 50%;
`;
export const Title = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;
export const Name = styled.span`
	font-weight: bold;
`;
export const UserName = styled.span``;
export const FollowersCardWrapper = styled.div`
	width: 100%;
	border-radius: 0.7rem;
	gap: 1rem;
	display: flex;
	flex-direction: column;
	font-size: 13px;
`;
export const ImageAndTitle = styled.div`
	display: flex;
	gap: 10px;
`;

export const StyledButton = styled(Button)`
	height: 2rem;
	padding: 0 20px;
`;
