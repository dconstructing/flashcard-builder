import React from 'react';
import Card from './index';
import {shallow} from 'enzyme';

describe('happy path', () => {
  test('base state without data', () => {
    const card = shallow(
      <Card data={[]} />
    );
    const front = card.find('div.front').first();
    const back = card.find('div.back').first();
    expect(front.prop('hidden')).toBe(false);
    expect(back.prop('hidden')).toBe(true);
  })    

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
  })    
})
