import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Surface from './index';

Enzyme.configure({ adapter: new Adapter() });

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
