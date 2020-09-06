import { useEffect, useReducer } from 'react';
import axios from 'axios';

import { reducer } from './reducers';

export const useGet = (url) => {
  const [data, dispatch] = useReducer(reducer, { loading: false, data: {} });

  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' });

    axios.get(url).then((response) => {
      dispatch({ type: 'LOAD_DATA_SUCCESS', data: response.data });
    });
  }, [url]);

  return data;
};

export const usePost = (url) => {
  const [data, dispatch] = useReducer(reducer, { loading: false, data: {} });

  const post = (data) => {
    axios
      .post(url, data)
      .finally(() => dispatch({ type: 'SAVA_DATA' }))
      .then((response) => {
        dispatch({ type: 'SAVE_DATA_SUCCESS', data: response.data });
      });
  };

  return [data, post];
};

export const useDelete = () => {
  const [data, dispatch] = useReducer(reducer, { loading: true, data: {} });

  const remove = (url) => {
    axios
      .delete(url)
      .finally(() => dispatch({ type: 'DELETE_DATA' }))
      .then(() => dispatch({ type: 'DELETE_DATA_SUCCESS' }));
  };

  return [data, remove];
};
