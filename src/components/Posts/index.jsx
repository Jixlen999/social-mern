import React from 'react';

import { PostsData } from '../../Data/PostsData';

import Post from '@/components/Post';

import { PostsWrapper } from './styled';

function Posts() {
	return (
		<PostsWrapper>
			{PostsData.map((post, index) => (
				<Post key={index} post={post} />
			))}
		</PostsWrapper>
	);
}

export default Posts;
