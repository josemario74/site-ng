import React, { useState, useEffect } from 'react';
import axios from 'axios';

type testProps ={
    id: number,
    name: string,
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://testphp8.sitrack.com/site5/test1/exercise1')
      .then(response => setData(response.data));
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;