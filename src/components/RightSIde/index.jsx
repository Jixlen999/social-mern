import { UilSetting } from '@iconscout/react-unicons';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { Link } from 'react-router-dom';

import Comment from '@/assets/comment.png';
import Home from '@/assets/home.png';
import Notifications from '@/assets/noti.png';
import ShareModal from '@/components/ShareModal';
import TrendCard from '@/components/TrendCard';

import { Icon, NavIcons, RightSideWrapper, StyledButton } from './styled';

function RightSide() {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<RightSideWrapper>
			<NavIcons>
				<Link to="../home">
					<Icon src={Home} alt="home" />
				</Link>
				<UilSetting />
				<Icon src={Notifications} alt="home" />
				<Icon src={Comment} alt="home" />
			</NavIcons>
			<TrendCard />
			<StyledButton onClick={open}>Share</StyledButton>
			<ShareModal opened={opened} close={close} />
		</RightSideWrapper>
	);
}

export default RightSide;
