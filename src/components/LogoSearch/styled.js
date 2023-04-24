import styled from 'styled-components';

export const SearchWrapper = styled.div`
	display: flex;
	gap: 0.75rem;
`;

export const Search = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.colors.inputColor};
	border-radius: 10px;
	padding: 5px;
`;

export const SearchInput = styled.input`
	background-color: transparent;
	border: none;
	outline: none;
`;

export const SearchIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	padding: 4px;
	background: ${({ theme }) => theme.colors.searchIconBg};
	color: ${({ theme }) => theme.colors.white};

	&:hover {
		cursor: pointer;
	}
`;
