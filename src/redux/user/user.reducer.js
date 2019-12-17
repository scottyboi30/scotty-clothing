import { SET_CURRENT_USER } from './user.actions';

const INITIAL_STATE = {
  currentUser: null,
};

const handleSetCurrentUser = (state, action) => (
  {
    ...state,
    ...action.payload,
  }
)

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return handleSetCurrentUser(state, action);
    }
    default:
      return state;
  }
}

export default userReducer;