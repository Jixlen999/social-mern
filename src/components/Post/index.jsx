/* eslint-disable no-unused-vars */
import React from 'react';

import Comment from '@/assets/comment.png';
import FilledLike from '@/assets/like.png';
import EmptyLike from '@/assets/notlike.png';
import Share from '@/assets/share.png';

import { Details, Image, Likes, PostReact, PostWrapper } from './styled';

function Post({ post }) {
	const { image, name, description, likes, liked } = post;
	return (
		<PostWrapper>
			<Image src={image} alt="post" />
			<PostReact>
				<img src={liked ? FilledLike : EmptyLike} alt="liked" />
				<img src={Comment} alt="comment" />
				<img src={Share} alt="share" />
			</PostReact>
			<Likes>{likes} likes</Likes>
			<Details>
				<span>
					<strong>{name}</strong>
				</span>
				<span> {description}</span>
			</Details>
		</PostWrapper>
	);
}

export default Post;
