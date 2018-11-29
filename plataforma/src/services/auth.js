export const TOKEN_KEY = "auth_token";
export const USER_PROFILE = "user";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  if(token !== undefined){
    localStorage.setItem(TOKEN_KEY, token);
    return true;
  }
  return false;
};

export const user = data => {
  localStorage.setItem(USER_PROFILE, JSON.stringify(data));
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_PROFILE);
};

export const register = (success) => {
  if(success){
    return true;
  }
  return false;
};