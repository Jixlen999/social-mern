import React from 'react';

import { Followers } from '../../Data/FollowersData';

import {
	Follower,
	FollowerImage,
	FollowersCardWrapper,
	ImageAndTitle,
	Name,
	StyledButton,
	Title,
	UserName,
} from './styled';

function FollowersCard() {
	return (
		<FollowersCardWrapper>
			<h3>Who is following you</h3>
			{Followers.map(({ name, userName, image }, index) => (
				<Follower key={`${name}-${index}`}>
					<ImageAndTitle>
						<FollowerImage src={image} alt={name} />
						<Title>
							<Name>{name}</Name>
							<UserName>@{userName}</UserName>
						</Title>
					</ImageAndTitle>
					<StyledButton>Follow</StyledButton>
				</Follower>
			))}
		</FollowersCardWrapper>
	);
}

export default FollowersCard;
