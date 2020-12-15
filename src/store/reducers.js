import * as types from './types';

export const initialState = {
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
    case types.ADVERTS_LOADED:
      return { ...state, adverts: action.payload.adverts };
    case types.ADVERTS_CREATED:
      if (!state.tweets) {
        return { ...state, adverts: [action.payload.advert] };
       }
      
        return { ...state, adverts: state.adverts.concat(action.payload.advert) };
  
    default:
      return state;
  }
};


export default reducer;
