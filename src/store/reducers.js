import * as types from './types';

const initialState = {
  auth: null,
  adverts: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      // login
      return { ...state, auth: action.payload.loggedUserId };
    case types.AUTH_LOGOUT:
      // logout
      return { ...state, auth: null };
    default:
      return state;
  }
};


export default reducer;
