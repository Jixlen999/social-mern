import { UilSetting } from '@iconscout/react-unicons';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

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
				<Icon src={Home} alt="home" />
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
