
import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    ADVERTS_LOADED,
    ADVERTS_CREATED,
    ADVERTS_TAGS,
    ADVERT_DELETED,
    ADVERT_LOADED,
  } from './types';
  

export const authLogin = loggedUserId => {
  return {
    type: AUTH_LOGIN,
    payload: {
      loggedUserId,
    },
  };
};

export const authLogout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const advertsLoaded = adverts => {
    return {
      type: ADVERTS_LOADED,
      payload: {
        adverts,
      },
    };
  };
  
  export const advertCreated = advert => {
    return {
      type: ADVERTS_CREATED,
      payload: {
        advert,
      },
    };
  };
  
