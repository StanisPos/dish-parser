import React from 'react';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

const StyledLink = styled.a`
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #d7d7d7;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: #d7d7d7;
    text-decoration: none;
  }
`;

const StyledLinkEmail = styled(StyledLink)`
  margin-top: 40px;
`;

const StyledLinkSignUp = styled(StyledLink)`
  margin-top: 85px;
`;

const Form = () => {
  return (
    <>
      <StyledForm>
        <Input type="phone" placeholder="Телефон" />
        <Input type="password" placeholder="Пароль" marginTop="24px" />
        <Button
          title="Войти"
          type="submit"
          onClick={() => console.log('submit')}
          marginTop="24px"
        />
      </StyledForm>
      <StyledLinkEmail href="#">Вход с помощью e-mail</StyledLinkEmail>
      <StyledLinkSignUp href="#">Зарегистрироваться</StyledLinkSignUp>
    </>
  );
};

export default Form;
