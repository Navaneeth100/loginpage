import React, { useState } from 'react';
import '../App.css'; // Importing CSS styles
import axios from 'axios'; // Importing Axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook for navigation

function Register() {
  const [email, setEmail] = useState(''); // State for email input field
  const [password, setPassword] = useState(''); // State for password input field
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    // Send POST request to the server's '/login' endpoint with email and password data
    axios.post('http://localhost:3009/login', { email, password })
      .then(response => {
        console.log(response); // Log the response from the server
        if (response.data.message === "Login successful") { // Check if login was successful
          alert("Login Successfully")
          navigate('/home'); // Navigate to the '/home' route upon successful login
        }
        else{
          alert("Incorrect Password")
        }
      })
      .catch(err => console.log(err)); // Log any errors that occur during the request
  }
  

  return (
    <div className='login'> {/* Assuming 'login' is a CSS class for styling */}
      <div className="register-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}> {/* Call 'handleSubmit' function on form submission */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update 'email' state on input change
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update 'password' state on input change
            />
          </div>
          <button type="submit">Login</button> {/* Submit button for logging in */}
        </form>
      </div>
    </div>
  );
}

export default Register;
