import React from 'react';

import PostSide from '@/components/PostSide';
import ProfileCard from '@/components/ProfileCard';
import ProfileLeft from '@/components/ProfileLeft';
import RightSide from '@/components/RightSIde';

import { ProfileCenter, ProfileWrapper } from './styled';

function ProfilePage() {
	return (
		<ProfileWrapper>
			<ProfileLeft />
			<ProfileCenter>
				<ProfileCard />
				<PostSide />
			</ProfileCenter>
			<RightSide />
		</ProfileWrapper>
	);
}

export default ProfilePage;
