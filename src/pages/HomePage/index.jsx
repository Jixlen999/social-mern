import React from 'react';

import PostSide from '@/components/PostSide';
import ProfileSide from '@/components/ProfileSide';
import RightSide from '@/components/RightSIde';

import { HomeWrapper } from './styled';

function HomePage() {
	return (
		<HomeWrapper>
			<ProfileSide />
			<PostSide />
			<RightSide />
		</HomeWrapper>
	);
}

export default HomePage;
