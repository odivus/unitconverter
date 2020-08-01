import React from 'react';
import { shallow, mount } from 'enzyme';

import Main, { Items, mainItems} from '../components/Main.js';

describe('Main Comp', () => {
  it('Renders the inner Items component', () => {
    // const wrapper = mount(<Main />);
    const wrapper = shallow(<Main />);
    expect(wrapper.find(Items).length).toEqual(1);
  });

  it('Items contain a 6 divs', () => {
    const items = shallow(<Items mainItems={mainItems} />);
    // .find() - enzyme sytax
    expect(items.find('div')).toHaveLength(6);
  });

  it('Items contains a div nodes with text', () => {
    const items = shallow(<Items mainItems={mainItems} />);
    const texts = items.find('div').map((node) => node.text());
    expect(texts).toEqual(['Currency', 'Temperature', 'Speed', 'Volume', 'Length', 'Weight']);
  })

})