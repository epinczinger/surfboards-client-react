const initialState = { token: '', isLogged: false, error: '' };

const sessionReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'RESET_SIGN_ERROR':
      return initialState;
    case 'SIGN_IN_UP':
      return { token: action.payload, isLogged: true, error: '' };
    case 'SIGN_OUT':
      window.localStorage.clear();
      return initialState;
    case 'SIGN_ERROR':
      return { token: '', isLogged: false, error: action.payload };
    case 'LOCAL_STORAGE_SIGN_IN':
      return action.payload;
    default:
      return state;
  }
};

export default sessionReducer;
