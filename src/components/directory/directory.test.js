import React from 'react';
import { shallow } from 'enzyme';

import {findByTestAttr} from '../../test/testUtils';
import sections from './sections.data';
import Directory from './directory.component';

/**
* Factory function to create a ShallowWrapper for the Directory component.
* @function setup
* @returns {ShallowWrapper}
*/
const setup = () => {
  return shallow(<Directory />)
};

describe('Directory component', () => {
  it('renders the correct amount of menu items', () => {
    const wrapper = setup();
    const menuItems = findByTestAttr(wrapper, 'component-menu-item');

    expect(menuItems.length).toBe(sections.length);
  });
});
