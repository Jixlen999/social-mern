import React from 'react';

import { ButtonWrapper } from './styled';

function Button({ children, ...props }) {
	return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}

export default Button;
