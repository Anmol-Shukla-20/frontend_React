import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>Login
      <button className='global-btn'>login global button</button>
      <button className={classes.localBtn}>local button</button>
    </div>
  )
};

export default Login;