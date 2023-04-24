import React from 'react';

import Cover from '@/assets/cover.png';
import Profile from '@/assets/profileImg.jpg';

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
	VerticalLine,
} from './styled';

function ProfileCard() {
	const isProfilePage = true;

	return (
		<ProfileCardWrapper>
			<ProfileImages>
				<ProfileCover src={Cover} alt="profile cover" />
				<ProfileImage src={Profile} alt="profile" />
			</ProfileImages>
			<ProfileTitle>
				<Name>Emily JX</Name>
				<Position>Senior Fullstack Engineer</Position>
			</ProfileTitle>
			<FollowStatus>
				<HorizontalLine />
				<FollowWrapper>
					<Follow>
						<Amount>8,675</Amount>
						<AmountOf>Followings</AmountOf>
					</Follow>
					<VerticalLine />
					<Follow>
						<Amount>1</Amount>
						<AmountOf>Followers</AmountOf>
					</Follow>
					{isProfilePage && (
						<>
							<VerticalLine />
							<Follow>
								<Amount>3</Amount>
								<AmountOf>Posts</AmountOf>
							</Follow>
						</>
					)}
				</FollowWrapper>
				<HorizontalLine />
			</FollowStatus>
			{!isProfilePage && <MyProfile>My Profile</MyProfile>}
		</ProfileCardWrapper>
	);
}

export default ProfileCard;
