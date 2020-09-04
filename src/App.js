import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

import { URL_API } from './services/constants';

// Função pura - Retorna um resultado dado o paramentro
const reducer = (state, action) => {
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

const useGet = (url) => {
  const [data, dispatch] = useReducer(reducer, { loading: true, data: {} });

  useEffect(() => {
    axios.get(url).then((response) => {
      dispatch({ type: 'LOAD_DATA_SUCCESS', data: response.data });
    });
  }, [url]);

  return data;
};

export default function App() {
  const data = useGet(URL_API);

  return (
    <div className="App">
      <p>My money</p>
      {JSON.stringify(data)}
    </div>
  );
}
