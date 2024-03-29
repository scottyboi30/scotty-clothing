import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

export const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div data-test="cart-icon" className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="cart-icon__icon" />
    <span data-test="item-count" className="cart-icon__count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = {
  toggleCartHidden,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);