import React from 'react';
import './SignIn.css';

function SignIn() {
  return (
    <div className="SignIn mainContainer">
      <h1 className="header">Sign In</h1>
      <form className="SignIn">
        <input 
          autoFocus 
          placeholder="username" 
        ></input>
        <input 
          type="password"
          placeholder='password' 
          ></input>
      </form>
    </div>
  )
}

export default SignIn;