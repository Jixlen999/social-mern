import { Modal } from '@mantine/core';

import PostShare from '@/components/PostShare';

function ShareModal({ opened, close }) {
	return (
		<Modal opened={opened} onClose={close} centered size="55%">
			<PostShare />
		</Modal>
	);
}

export default ShareModal;
