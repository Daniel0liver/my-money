export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA': {
      return { ...state, loading: true };
    }
    case 'LOAD_DATA_SUCCESS': {
      return { ...state, loading: false, data: action.data };
    }
    default:
  }
  return state;
};
