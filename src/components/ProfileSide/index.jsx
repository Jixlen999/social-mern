import React from 'react';

import FollowersCard from '@/components/FollowersCard';
import LogoSearch from '@/components/LogoSearch';
import ProfileCard from '@/components/ProfileCard';

import { ProfileWrapper } from './styled';

function ProfileSide() {
	return (
		<ProfileWrapper>
			<LogoSearch />
			<ProfileCard location="homePage" />
			<FollowersCard />
		</ProfileWrapper>
	);
}

export default ProfileSide;
