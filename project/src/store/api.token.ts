const AUTH_TOKEN_KEY_NAME = 'wtw-token';

export type Token = string;

export const getAuthToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveAuthToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropAuthToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
