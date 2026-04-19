import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://orca-saas-api.onrender.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('company', data.name);
      onLogin && onLogin(data);
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>🔐 登入 orcaSaaS</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
        <input placeholder="密碼" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
        <button type="submit">登入</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
