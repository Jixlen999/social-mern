import React from 'react';

import Posts from '@/components/Posts';
import PostShare from '@/components/PostShare';

import { PostSideWrapper } from './styled';

function PostSide() {
	return (
		<PostSideWrapper>
			<PostShare />
			<Posts />
		</PostSideWrapper>
	);
}

export default PostSide;
