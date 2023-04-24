import { Modal } from '@mantine/core';

import { AuthForm, AuthInput, StyledButton } from '@/pages/AuthPage/styled';

function ProfileModal({ opened, close }) {
	return (
		<Modal opened={opened} onClose={close} centered size="55%">
			<AuthForm>
				<h3>Your info</h3>
				<div>
					<AuthInput type="text" name="firstName" placeholder="First Name" />
					<AuthInput type="text" name="lastName" placeholder="Last Name" />
				</div>
				<div>
					<AuthInput type="text" name="worksAt" placeholder="Works at" />
				</div>
				<div>
					<AuthInput type="text" name="livesIn" placeholder="Lives in" />
					<AuthInput type="text" name="country" placeholder="Country" />
				</div>
				<div>
					<AuthInput
						type="text"
						name="relationshipStatus"
						placeholder="Relationship status"
					/>
				</div>
				<div>
					Profile Image
					<input type="file" name="profileImg" />
					Cover Image
					<input type="file" name="coverImg" />
				</div>
				<StyledButton>Update</StyledButton>
			</AuthForm>
		</Modal>
	);
}

export default ProfileModal;
