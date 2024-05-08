import React, { useState } from 'react';
import { loginUser } from '../services/apiService';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      console.log(response); // Poți trata răspunsul aici (de ex. redirecționare către o altă pagină)
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
