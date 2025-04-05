import { useState, useEffect } from 'react';

function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setBackendData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Fintech App</h1>
      {backendData ? (
        <div>
          <p>Message: {backendData.message}</p>
          <p>Status: {backendData.status}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;