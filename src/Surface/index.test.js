import React from 'react';
import {shallow} from 'enzyme';

import Surface from './index';

describe('happy path', () => {
	test('drawer starts open', () => {
		const wrapper = shallow(<Surface />);
		console.log('surface', wrapper.debug());
		const drawers = wrapper.find('Drawer');
		expect(drawers).toHaveLength(1);
		const drawer = drawers.first();
		expect(drawer.prop('open')).toBeTruthy();
	});
});
