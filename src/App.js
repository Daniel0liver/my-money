import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { URL_API } from './services/constants';

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(URL_API).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="App">
      <p>My money</p>
      {JSON.stringify(data)}
    </div>
  );
}
