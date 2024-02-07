// LogIn.jsx

import React from 'react';
import './LogIn.css'; // Import CSS file

const LogIn = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log In</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
