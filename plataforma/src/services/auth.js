export const TOKEN_KEY = "auth_token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  if(token !== undefined){
    localStorage.setItem(TOKEN_KEY, token);
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const register = (success) => {
  if(success){
    return true;
  }
  return false;
};