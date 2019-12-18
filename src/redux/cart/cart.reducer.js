import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from './cart.actions';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const handleToggleCart = state => ({
  ...state,
  hidden: !state.hidden
});

const handleClearItem = (state, toRemove) => ({
  ...state,
  cartItems: state.cartItems.filter(item => item.id !== toRemove.id),
})

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

export const removeItemFromCart = ({ cartItems }, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
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
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state, action.payload),
      }
    case CLEAR_ITEM_FROM_CART:
      return handleClearItem(state, action.payload);
    default:
      return state;
  }
};

export default cartReducer;
