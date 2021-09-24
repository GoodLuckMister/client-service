const getIsAuthenticated = state => state.auth.isAuthenticated;
const getVerifyRegister = state => state.auth.register;

const getUsername = state => state.auth.user.name;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsAuthenticated,
  getUsername,
  getVerifyRegister,
};
