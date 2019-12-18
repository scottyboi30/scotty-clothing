import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';
import { CartIcon } from './cart-icon.component';

const defaultProps = {
  itemCount: 4,
  toggleCartHidden: jest.fn(),
}

/**
* Factory function to create a ShallowWrapper for the MenuItem component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @returns {ShallowWrapper}
*/
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CartIcon {...setupProps} />)
};

describe('CartIcon component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('displays an item count', () => {
    const itemCount = findByTestAttr(wrapper, 'item-count');
    expect(itemCount.text()).toBe(defaultProps.itemCount.toString());
  });

  describe('when the icon is clicked', () => {
    beforeEach(() => {
      wrapper.simulate('click');
    });

    it('makes a call to trigger the dropdown menu', () => {
      expect(defaultProps.toggleCartHidden).toBeCalled();
    });
  });
});
