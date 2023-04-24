import { UilSearch } from '@iconscout/react-unicons';
import React from 'react';

import Logo from '@/assets/logo.png';

import { Search, SearchIcon, SearchInput, SearchWrapper } from './styled';

function LogoSearch() {
	return (
		<SearchWrapper>
			<img src={Logo} alt="logo" />
			<Search>
				<SearchInput type="text" placeholder="#Explore" />
				<SearchIcon>
					<UilSearch />
				</SearchIcon>
			</Search>
		</SearchWrapper>
	);
}

export default LogoSearch;
