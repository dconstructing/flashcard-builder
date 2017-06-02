import React from 'react';
import {shallow} from 'enzyme';

import Cards from './index';

import Card from '../Card/index';

describe('happy path', () => {
	test('empty Cards container', () => {
		const cards = shallow(
			<Cards />
		);
		expect(cards.contains(<p>No cards found</p>)).toBeTruthy();
		expect(cards.find('FlatButton')).toHaveLength(0);
	});

	test('Shows 1 child Card', () => {
		const cards = shallow(
			<Cards>
				<Card data={['first', 'second']} />
				<Card data={['third', 'fourth']} />
			</Cards>
		);
		expect(cards.find(Card)).toHaveLength(1);
		expect(cards.find('FlatButton')).toHaveLength(2);
	});
});
