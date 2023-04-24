import { UilPen } from '@iconscout/react-unicons';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

import ProfileModal from '@/components/ProfileModal';

import {
	EditButton,
	Info,
	InfoCardWrapper,
	InfoHeader,
	StyledButton,
} from './styled';

function InfoCard() {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<InfoCardWrapper>
			<InfoHeader>
				<h4>Your Info</h4>
				<ProfileModal opened={opened} close={close} />
				<EditButton onClick={open}>
					<UilPen width="2rem" height="1.2rem" />
				</EditButton>
			</InfoHeader>
			<Info>
				<span>
					<strong>Status </strong>
				</span>
				<span>in Relationship</span>
			</Info>
			<Info>
				<span>
					<strong>Lives in </strong>
				</span>
				<span>Bergen</span>
			</Info>
			<Info>
				<span>
					<strong>Works at </strong>
				</span>
				<span>International Tech</span>
			</Info>
			<StyledButton>Log out</StyledButton>
		</InfoCardWrapper>
	);
}

export default InfoCard;
