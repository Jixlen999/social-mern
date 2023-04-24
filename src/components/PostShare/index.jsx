import {
	UilScenery,
	UilPlayCircle,
	UilLocationPoint,
	UilSchedule,
	UilTimes,
} from '@iconscout/react-unicons';
import React, { useRef, useState } from 'react';

import ProfileImage from '@/assets/profileImg.jpg';

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
	const [imageUrl, setImageUrl] = useState(null);
	const imageRef = useRef();

	const handleImageChange = ({ target }) => {
		if (target.files && target.files[0]) {
			setImageUrl(URL.createObjectURL(target.files[0]));
		}
	};

	const clickHandler = () => {
		imageRef.current.click();
	};

	const handleImageClose = () => {
		setImageUrl(null);
	};

	return (
		<PostShareWrapper>
			<Image src={ProfileImage} alt="Post share" />
			<InputAndOptionsWrapper>
				<Input type="text" placeholder="What's happening" />
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
					<StyledButton>Share</StyledButton>
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
						<ChosenImage src={imageUrl} alt="chosen image" />
					</PreviewImage>
				)}
			</InputAndOptionsWrapper>
		</PostShareWrapper>
	);
}

export default PostShare;
