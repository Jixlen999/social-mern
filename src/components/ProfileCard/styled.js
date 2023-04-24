import styled from 'styled-components';

export const ProfileCardWrapper = styled.div`
	border-radius: 1.5rem;
	display: flex;
	flex-direction: column;
	position: relative;
	gap: 1rem;
	overflow-x: clip;
	background: ${({ theme }) => theme.colors.cardColor};
`;
export const ProfileImages = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ProfileCover = styled.img`
	width: 100%;
`;

export const ProfileImage = styled.img`
	width: 6rem;
	border-radius: 50%;
	position: absolute;
	bottom: -3rem;
	box-shadow: ${({ theme }) => theme.profileShadow};
`;

export const ProfileTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3rem;
	gap: 10px;
`;

export const Name = styled.span`
	font-weight: bold;
`;
export const Position = styled.span``;

export const FollowStatus = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
`;
export const Follow = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;
`;
export const VerticalLine = styled.div`
	height: 150%;
	border-left: 2px solid ${({ theme }) => theme.colors.hrColor};
`;

export const HorizontalLine = styled.hr`
	width: 85%;
	border: 1px solid ${({ theme }) => theme.colors.hrColor};
`;

export const FollowWrapper = styled.div`
	display: flex;
	gap: 1rem;
	width: 80%;
	justify-content: space-around;
	align-items: center;
`;

export const Amount = styled.span`
	font-weight: bold;
`;

export const AmountOf = styled.span`
	color: ${({ theme }) => theme.colors.gray};
	font-size: 13px;
`;

export const MyProfile = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.orange};
	align-self: center;
	margin-bottom: 1rem;
	cursor: pointer;
`;
