import React, { useEffect, useReducer } from 'react';

import { URL_API } from './services/constants';
import { useGet } from './services/hooks';

export default function App() {
  const data = useGet(URL_API);

  return (
    <div className="App">
      <p>My money</p>
      {JSON.stringify(data)}
    </div>
  );
}
