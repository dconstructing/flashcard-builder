import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('happy path', () => {
	test('base state without data', () => {
		const card = shallow(
			<Card data={[]} />
		);
		const front = card.find('div.front').first();
		const back = card.find('div.back').first();
		expect(front.prop('hidden')).toBe(false);
		expect(back.prop('hidden')).toBe(true);
	});

	test('base state with data', () => {
		const card = shallow(
			<Card data={['first', 'second']} />
		);
		const front = card.find('div.front').first();
		const back = card.find('div.back').first();
		expect(front.prop('hidden')).toBe(false);
		expect(back.prop('hidden')).toBe(true);
		expect(front.html()).toBe('<div class="front"><p>first</p></div>');
		expect(back.html()).toBe('<div class="back" hidden=""><p>second</p></div>');
	});
});

describe('customizations', () => {
	test('custom front template', () => {
		const card = shallow(
			<Card
				data={['first', 'second']}
				frontTemplate="<p><span>{{col1}}</span></p>"
			/>
		);
		const front = card.find('div.front').first();
		expect(front.html()).toBe('<div class="front"><p><span>first</span></p></div>');
	});

	test('custom back template', () => {
		const card = shallow(
			<Card
				data={['first', 'second']}
				backTemplate="<p><span>{{col2}}</span></p>"
			/>
		);
		const back = card.find('div.back').first();
		expect(back.html()).toBe('<div class="back" hidden=""><p><span>second</span></p></div>');
	});

	test('start by showing the back of the card', () => {
		const card = shallow(
			<Card
				data={['first', 'second']}
				front={false}
			/>
		);
		const front = card.find('div.front').first();
		expect(front.html()).toBe('<div class="front" hidden=""><p>first</p></div>');
		const back = card.find('div.back').first();
		expect(back.html()).toBe('<div class="back"><p>second</p></div>');
	});

	test('multiple data points on front', () => {
		const card = shallow(
			<Card
				data={['first', 'second', 'third', 'fourth']}
				frontTemplate="<p><span>{{col1}}</span><span>{{col2}}</span></p>"
			/>
		);
		const front = card.find('div.front').first();
		expect(front.html()).toBe('<div class="front"><p><span>first</span><span>second</span></p></div>');
	});

	test('multiple data points on back', () => {
		const card = shallow(
			<Card
				data={['first', 'second', 'third', 'fourth']}
				backTemplate="<p><span>{{col3}}</span><span>{{col4}}</span></p>"
			/>
		);
		const back = card.find('div.back').first();
		expect(back.html()).toBe('<div class="back" hidden=""><p><span>third</span><span>fourth</span></p></div>');
	});
});

describe('interactions', () => {
	test('flip card front to back', () => {
		const card = shallow(
			<Card data={['first', 'second']} />
		);
		const front = card.find('div.front').first();
		const back = card.find('div.back').first();
		expect(front.prop('hidden')).toBe(false);
		expect(back.prop('hidden')).toBe(true);
		card.setProps({front: false});
		const front2 = card.find('div.front').first();
		const back2 = card.find('div.back').first();
		expect(front2.prop('hidden')).toBe(true);
		expect(back2.prop('hidden')).toBe(false);
	});

	test('tap card', () => {
		expect.assertions(1);
		const onClick = () => {
			expect(true).toBeTruthy();
		};
		const card = shallow(
			<Card data={['first', 'second']} onCardClicked={onClick} />
		);
		card.simulate('click');
	});
});

describe('sad path', () => {
	test('missing data', () => {
		expect(() => {
			shallow(<Card />);
		}).toThrow(TypeError);
	});
});
