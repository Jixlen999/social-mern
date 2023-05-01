/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

import {
	Amount,
	AmountOf,
	Follow,
	FollowStatus,
	FollowWrapper,
	HorizontalLine,
	MyProfile,
	Name,
	Position,
	ProfileCardWrapper,
	ProfileCover,
	ProfileImage,
	ProfileImages,
	ProfileTitle,
	StyledLink,
	VerticalLine,
} from './styled';

function ProfileCard({ location }) {
	const { user } = useSelector((state) => state.authReducer.authData);
	const {
		_id,
		firstName,
		lastName,
		coverPicture,
		profilePicture,
		following,
		followers,
		worksAt,
	} = user;
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
	const posts = useSelector((state) => state.postReducer.posts);

	return (
		<ProfileCardWrapper>
			<ProfileImages>
				<ProfileCover
					src={
						coverPicture
							? serverPublic + coverPicture
							: `${serverPublic}defaultCover.jpg`
					}
					alt="profile cover"
				/>
				<ProfileImage
					src={
						profilePicture
							? serverPublic + profilePicture
							: `${serverPublic}defaultImage.jpg`
					}
					alt="profile"
				/>
			</ProfileImages>
			<ProfileTitle>
				<Name>{`${firstName} ${lastName}`}</Name>
				<Position>{worksAt || 'Write about yourself'}</Position>
			</ProfileTitle>
			<FollowStatus>
				<HorizontalLine />
				<FollowWrapper>
					<Follow>
						<Amount>{following.length}</Amount>
						<AmountOf>Following</AmountOf>
					</Follow>
					<VerticalLine />
					<Follow>
						<Amount>{followers.length}</Amount>
						<AmountOf>Followers</AmountOf>
					</Follow>
					{location === 'profilePage' && (
						<>
							<VerticalLine />
							<Follow>
								<Amount>
									{posts.filter((post) => post.userId === user._id).length}
								</Amount>
								<AmountOf>Posts</AmountOf>
							</Follow>
						</>
					)}
				</FollowWrapper>
				<HorizontalLine />
			</FollowStatus>
			{location !== 'profilePage' && (
				<MyProfile>
					<StyledLink to={`/profile/${_id}`}>My Profile</StyledLink>
				</MyProfile>
			)}
		</ProfileCardWrapper>
	);
}

export default ProfileCard;
