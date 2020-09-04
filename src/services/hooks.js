import { useEffect, useReducer } from 'react';
import axios from 'axios';

import { reducer } from './reducers';

export const useGet = (url) => {
  const [data, dispatch] = useReducer(reducer, { loading: true, data: {} });

  useEffect(() => {
    axios.get(url).then((response) => {
      dispatch({ type: 'LOAD_DATA_SUCCESS', data: response.data });
    });
  }, [url]);

  return data;
};
