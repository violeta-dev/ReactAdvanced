import { AUTH_LOGIN, AUTH_LOGOUT } from './types';

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
