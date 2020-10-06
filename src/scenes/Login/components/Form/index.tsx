import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

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

export const Form = React.memo(() => {
  const [phoneInputValue, setPhoneInputValue] = useState('');
  const [phoneInputHasError, setPhoneInputHasError] = useState(true);

  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [passwordInputHasError, setPasswordInputHasError] = useState(true);

  const handleChangePhoneInput = (value: string) => {
    setPhoneInputValue(value);
    setPhoneInputHasError(!/^((\+7|7|8)+([0-9]){10})$/.test(value));
  };

  const handleChangePasswordInput = (value: string) => {
    setPasswordInputValue(value);
    setPasswordInputHasError(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value));
  };

  return (
    <>
      <StyledForm>
        <Input
          type="tel"
          placeholder="Телефон"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChangePhoneInput(event.target.value);
          }}
          value={phoneInputValue}
        />
        <Input
          type="password"
          placeholder="Пароль"
          marginTop="24px"
          value={passwordInputValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChangePasswordInput(event.target.value);
          }}
        />
        <Button
          title="Войти"
          type="submit"
          onClick={() => console.log('submit')}
          marginTop="24px"
          disabled={phoneInputHasError || passwordInputHasError}
        />
      </StyledForm>
      <StyledLinkEmail href="#">Вход с помощью e-mail</StyledLinkEmail>
      <StyledLinkSignUp href="#">Зарегистрироваться</StyledLinkSignUp>
    </>
  );
});
