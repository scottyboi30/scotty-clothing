import { TOGGLE_CART_HIDDEN, ADD_ITEM } from './cart.actions';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const handleToggleCart = state => ({
  ...state,
  hidden: !state.hidden
});

const addItemToCart = ({ cartItems }, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return handleToggleCart(state);
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state, action.payload),
      }
    default:
      return state;
  }
};

export default cartReducer;
