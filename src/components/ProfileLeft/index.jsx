import React from 'react';

import FollowersCard from '@/components/FollowersCard';
import InfoCard from '@/components/InfoCard';
import LogoSearch from '@/components/LogoSearch';

import { ProfileLeftWrapper } from './styled';

function ProfileLeft() {
	return (
		<ProfileLeftWrapper>
			<LogoSearch />
			<InfoCard />
			<FollowersCard />
		</ProfileLeftWrapper>
	);
}

export default ProfileLeft;
