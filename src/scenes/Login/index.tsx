import React from 'react';
import styled from 'styled-components';
import Form from './components/Form';

const LoginWrapper = styled.div`
  padding-top: 248px;
`;

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 42px;
  line-height: 50px;
  color: #ff7a00;
  text-shadow: 0 2px 0 rgba(215, 215, 215, 0.16);
  text-align: center;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <StyledTitle>dish parser</StyledTitle>
      <Form />
    </LoginWrapper>
  );
};

export default Login;
