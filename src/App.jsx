import { useState } from 'react';
import Login from './Login';
import Register from './Register';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [company, setCompany] = useState(localStorage.getItem('company'));

  if (token) {
    return (
      <div style={{ textAlign: 'center', padding: 40 }}>
        <h1>🐋 歡迎，{company}</h1>
        <button onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}>登出</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 40 }}>
      <Register />
      <hr />
      <Login onLogin={(data) => {
        setToken(data.token);
        setCompany(data.name);
      }} />
    </div>
  );
}

export default App;
