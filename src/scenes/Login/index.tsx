import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Form } from '@components/Form';

const LoginWrapper = styled.div`
  padding-top: 248px;
  padding-bottom: 96px;
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

export const Login = React.memo(() => {
  const [fieldValue, setFieldValue] = useState('');
  const history = useHistory();

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  const handleButtonClick = () => {
    history.push('/login/password/');
  };

  return (
    <LoginWrapper>
      <StyledTitle>dish parser</StyledTitle>
      <Form
        fieldType="phone"
        value={fieldValue}
        onChange={handleFieldChange}
        buttonTitle="Продолжить"
        bottomLinkTitle="Войти с помощью e-mail"
        onButtonClick={handleButtonClick}
      />
    </LoginWrapper>
  );
});
