import {
	UilScenery,
	UilPlayCircle,
	UilLocationPoint,
	UilSchedule,
	UilTimes,
} from '@iconscout/react-unicons';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadImage, uploadPost } from '@/actions/UploadAction';

import {
	ChosenImage,
	Image,
	ImageWrapper,
	Input,
	InputAndOptionsWrapper,
	Location,
	Option,
	Photo,
	PostOptions,
	PostShareWrapper,
	PreviewImage,
	Schedule,
	StyledButton,
	Video,
} from './styled';

function PostShare() {
	const loading = useSelector((state) => state.postReducer.uploading);
	const [imageUrl, setImageUrl] = useState(null);
	const imageRef = useRef();
	const descriptionRef = useRef();
	const { user } = useSelector((state) => state.authReducer.authData);
	const dispatch = useDispatch();
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	const handleImageChange = ({ target }) => {
		if (target.files && target.files[0]) {
			const image = target.files[0];
			setImageUrl(image);
		}
	};

	const clickHandler = () => {
		imageRef.current.click();
	};

	const handleImageClose = () => {
		setImageUrl(null);
	};

	const resetForm = () => {
		setImageUrl(null);
		descriptionRef.current.value = null;
	};

	const handleShareClick = (event) => {
		event.preventDefault();
		const newPost = {
			userId: user._id,
			description: descriptionRef.current.value,
		};
		if (imageUrl) {
			const data = new FormData();
			const fileName = Date.now() + imageUrl.name;
			data.append('name', fileName);
			data.append('file', imageUrl);
			newPost.image = fileName;
			try {
				dispatch(uploadImage(data));
			} catch (error) {
				console.log(error);
			}
		}
		if (newPost.description || newPost.image) {
			dispatch(uploadPost(newPost));
			resetForm();
		}
	};

	return (
		<PostShareWrapper>
			<Image
				src={
					user.profilePicture
						? serverPublic + user.profilePicture
						: `${serverPublic}defaultImage.jpg`
				}
				alt="Post share"
			/>
			<InputAndOptionsWrapper>
				<Input
					type="text"
					placeholder="What's happening"
					ref={descriptionRef}
					required
				/>
				<PostOptions>
					<Photo>
						<Option onClick={clickHandler}>
							<UilScenery />
							Photo
						</Option>
					</Photo>
					<Video>
						<Option>
							<UilPlayCircle />
							Video
						</Option>
					</Video>
					<Location>
						<Option>
							<UilLocationPoint />
							Location
						</Option>
					</Location>
					<Schedule>
						<Option>
							<UilSchedule />
							Schedule
						</Option>
					</Schedule>
					<StyledButton onClick={handleShareClick} disabled={loading}>
						{loading ? 'Uploading' : 'Share'}
					</StyledButton>
					<ImageWrapper>
						<input
							type="file"
							name="imageInput"
							ref={imageRef}
							onChange={handleImageChange}
						/>
					</ImageWrapper>
				</PostOptions>
				{imageUrl && (
					<PreviewImage>
						<UilTimes onClick={handleImageClose} />
						<ChosenImage
							src={URL.createObjectURL(imageUrl)}
							alt="chosen image"
						/>
					</PreviewImage>
				)}
			</InputAndOptionsWrapper>
		</PostShareWrapper>
	);
}

export default PostShare;
