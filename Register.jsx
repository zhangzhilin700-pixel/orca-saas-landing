import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://orca-saas-api.onrender.com/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>🐋 註冊 orcaSaaS</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="公司名稱" value={name} onChange={e => setName(e.target.value)} /><br/>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
        <input placeholder="密碼" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
        <button type="submit">註冊</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
