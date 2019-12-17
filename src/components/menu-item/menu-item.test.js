import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';
import sections from '../directory/sections.data';
import { MenuItem } from './menu-item.component';

const history = { push: jest.fn() };

const defaultProps = {
  ...sections[0],
  match: { url: 'test' },
  history
}

/**
* Factory function to create a ShallowWrapper for the MenuItem component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @returns {ShallowWrapper}
*/
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<MenuItem {...setupProps} />)
};

describe('MenuItem component', () => {
  beforeEach(() => {
    history.push.mockReset();
  });

  describe('when a menu item is clicked', () => {
    beforeEach(() => {
      const wrapper = setup();
      const menuItem = findByTestAttr(wrapper, 'menu-item');

      menuItem.simulate('click');
    });

    it('redirects the user', () => {

      expect(history.push).toHaveBeenCalled();
    });
  })
});
