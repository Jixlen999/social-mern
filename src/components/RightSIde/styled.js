import styled from 'styled-components';

import Button from '@/components/Button';

export const RightSideWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
export const NavIcons = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const Icon = styled.img`
	width: 1.5rem;
	height: 1.5rem;
`;

export const StyledButton = styled(Button)`
	height: 3rem;
	width: 80%;
	align-self: center;
`;
