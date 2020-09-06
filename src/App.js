import React from 'react';

import { URL_API } from './services/constants';
import { useGet, usePost, useDelete } from './services/hooks';

export default function App() {
  const data = useGet(URL_API);
  const [postData, post] = usePost(URL_API);
  const [deletedData, remove] = useDelete();

  const handleSave = () => {
    post({ value: 32, description: 'Conta de luz' });
  };

  const handleRemove = () => {
    remove('https://my-money-prime.firebaseio.com/transactions.json');
  };

  return (
    <div className="App">
      <p>My money</p>
      <pre>{JSON.stringify(data)}</pre>
      <pre>{JSON.stringify(postData)}</pre>
      <pre>{JSON.stringify(deletedData)}</pre>

      <button onClick={handleSave}>Adicionar</button>
      <button onClick={handleRemove}>Deletar</button>
    </div>
  );
}
