export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA': {
      return { ...state, loading: true };
    }
    case 'LOAD_DATA_SUCCESS': {
      return { ...state, loading: false, data: action.data };
    }
    case 'SAVE_DATA': {
      return { ...state, loading: true };
    }
    case 'SAVE_DATA_SUCCESS': {
      return { ...state, loading: false, data: action.data };
    }
    case 'DELETE_DATA': {
      return { ...state, loading: true };
    }
    case 'DELETE_DATA_SUCCESS': {
      return { ...state, loading: false };
    }
    default:
  }
  return state;
};
