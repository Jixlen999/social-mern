/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { likePost } from '@/api/PostRequest';
import Comment from '@/assets/comment.png';
import FilledLike from '@/assets/like.png';
import EmptyLike from '@/assets/notlike.png';
import Share from '@/assets/share.png';

import { Details, Image, Likes, PostReact, PostWrapper } from './styled';

function Post({ post }) {
	const { _id, image, name, description, likes, liked } = post;
	const { user } = useSelector((state) => state.authReducer.authData);
	const [isLiked, setIsLiked] = useState(likes.includes(user._id));
	const [likesAmount, setLikesAmount] = useState(likes.length);

	const handleLike = () => {
		setIsLiked((prev) => !prev);
		likePost(_id, user._id);
		isLiked
			? setLikesAmount((prev) => prev - 1)
			: setLikesAmount((prev) => prev + 1);
	};

	return (
		<PostWrapper>
			{image && (
				<Image src={process.env.REACT_APP_PUBLIC_FOLDER + image} alt="post" />
			)}
			<Details>
				<span>
					<strong>{name}</strong>
				</span>
				<span> {description}</span>
			</Details>
			<PostReact>
				<img
					src={isLiked ? FilledLike : EmptyLike}
					alt="liked"
					onClick={handleLike}
				/>
				<img src={Comment} alt="comment" />
				<img src={Share} alt="share" />
			</PostReact>
			<Likes>{likesAmount} likes</Likes>
		</PostWrapper>
	);
}

export default Post;
