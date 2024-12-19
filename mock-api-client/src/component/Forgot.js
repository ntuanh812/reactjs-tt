import React, { useState } from 'react';
import axios from 'axios';
import Headers from '../Header';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/user/forgot-password', { email });
      setMessage('A reset link has been sent to your email.');
      setErrorMessage('');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to send reset link. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="container">
        <Headers/>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        {message && <p className="text-success">{message}</p>}
        {errorMessage && <p className="text-error">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
