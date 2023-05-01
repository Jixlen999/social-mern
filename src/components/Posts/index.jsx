import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTimelinePosts } from '@/actions/PostAction';
import Post from '@/components/Post';

import { PostsWrapper } from './styled';

function Posts() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.authReducer.authData);
	const { posts, loading } = useSelector((state) => state.postReducer);

	useEffect(() => {
		dispatch(getTimelinePosts(user._id));
	}, []);

	return (
		<PostsWrapper>
			{loading
				? 'Loading posts... '
				: posts.map((post) => <Post key={post._id} post={post} />)}
		</PostsWrapper>
	);
}

export default Posts;
