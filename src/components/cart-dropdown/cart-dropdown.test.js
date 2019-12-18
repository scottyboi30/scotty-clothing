import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';
import { CartDropdown } from './cart-dropdown.component';

const history = { push: jest.fn() };
const toggleCartHidden = jest.fn();
const cartItems = [{ id: 1 }, { id: 2 }];

const defaultProps = {
  history,
  toggleCartHidden,
  cartItems,
}

/**
* Factory function to create a ShallowWrapper for the MenuItem component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @returns {ShallowWrapper}
*/
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CartDropdown {...setupProps} />)
};

describe('CartDropdown component', () => {
  let wrapper;
  describe('when the cart has items', () => {
    beforeEach(() => {
      wrapper = setup();
    });
    it('renders a CartItem for each cart item', () => {
      expect(wrapper.find('CartItem').length).toBe(cartItems.length);
    });
  });

  describe('when the cart has no items', () => {
    beforeEach(() => {
      wrapper = setup({cartItems: []});
    });
    it('displays an empty cart message', () => {
      const emptyMessage = findByTestAttr(wrapper, 'empty-message');
      expect(emptyMessage).toBeTruthy();
    });
  });

  describe('when the ckeckout button is clicked', () => {
    beforeEach(() => {
      history.push.mockReset();
      toggleCartHidden.mockReset();
    });

    beforeEach(() => {
      wrapper = setup();
      const checkoutButton = findByTestAttr(wrapper, 'checkout-button');

      checkoutButton.simulate('click');
    });
    it('directs the user to the checkout page', () => {
      expect(history.push).toBeCalledWith('/checkout');
    });

    it('toggles the dropsown menu', () => {
      expect(toggleCartHidden).toHaveBeenCalled();
    });
  });
});
