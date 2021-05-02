const sessionReducer = (
  state = ['', false, ''],
  action,
) => {
  switch (action.type) {
    case 'RESET_SIGN_ERROR':
      return ['', false, ''];
    case 'SIGN_IN_UP':
      return [action.payload, true, ''];
    case 'SIGN_OUT':
      return ['', false, ''];
    case 'SIGN_ERROR':
      return ['', false, action.payload];
    default:
      return state;
  }
};

export default sessionReducer;
