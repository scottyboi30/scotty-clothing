import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

export const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <div className='cart-dropdown'>
    <div className='cart-dropdown__items'>
      {cartItems.length ?
        (cartItems.map((item) => (<CartItem key={item.id} item={item} />)))
        :
        (<span data-test="empty-message" className="cart-dropdown__empty-message">Your cart is empty</span>)}
    </div>
    <CustomButton
      onClick={() => {
        toggleCartHidden();
        history.push('/checkout');
      }}
      extraClasses="custom-button--black"
      data-test="checkout-button">GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapActionsToProps = {
  toggleCartHidden,
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(CartDropdown));
