import React from 'react';

import { TrendData } from '../../Data/TrendData';

import { CardWrapper, Trend, TrendName, TrendShares } from './styled';

function TrendCard() {
	return (
		<CardWrapper>
			<h3>Trends for you</h3>
			{TrendData.map(({ name, shares }, index) => (
				<Trend key={index}>
					<TrendName>#{name}</TrendName>
					<TrendShares>{shares}k shares</TrendShares>
				</Trend>
			))}
		</CardWrapper>
	);
}

export default TrendCard;
