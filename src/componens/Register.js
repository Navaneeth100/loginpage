import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Send POST request to the server's '/register' endpoint with email and password data
   axios.post('http://localhost:3009/register', { email, password })
  .then(response => {
    console.log(response.data); // Log the response data
    // Navigate to the '/login' route upon successful registration
    navigate('/login');
  })
  .catch(error => {
    console.error('Error:', error.response); // Log the error response
    // Handle the error, e.g., show an error message to the user
  });

  }

  return (
    <div className='login'>
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
