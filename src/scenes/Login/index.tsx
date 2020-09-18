import React from 'react';
import Button from '@components/button';
import Form from './components/Form';

const Login = () => {
  return (
    <div className="login">
      <h1 className="login-logo">DISH PARSER</h1>
      <Form />
      <Button />
    </div>
  );
};

export default Login;
