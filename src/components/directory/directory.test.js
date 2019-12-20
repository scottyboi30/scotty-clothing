import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';
import sections from './sections.data';
import { Directory } from './directory.component';

const defaultProps = {
  sections,
}

/**
* Factory function to create a ShallowWrapper for the Directory component.
* @function setup
* @returns {ShallowWrapper}
*/
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Directory {...setupProps} />)
};

describe('Directory component', () => {
  it('renders the correct amount of menu items', () => {
    const wrapper = setup();
    const menuItems = findByTestAttr(wrapper, 'menu-item');

    expect(menuItems.length).toBe(sections.length);
  });
});
