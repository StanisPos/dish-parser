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
  const [phoneInputHasError, setPhoneInputHasError] = useState(false);
  const [phoneInputValue, setPhoneInputValue] = useState('');

  const handleChangePhoneInput = (value: string) => {
    setPhoneInputValue(value);
    setPhoneInputHasError(!/^(1\s|1|)?((\(\d{3}\))|\d{3})(|\s)?(\d{3})(|\s)?(\d{4})$/.test(value));
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
        {/* <Input type="password" placeholder="Пароль" marginTop="24px" /> */}
        <Button
          title="Войти"
          type="submit"
          onClick={() => console.log('submit')}
          marginTop="24px"
          disabled={phoneInputHasError}
        />
      </StyledForm>
      <StyledLinkEmail href="#">Вход с помощью e-mail</StyledLinkEmail>
      <StyledLinkSignUp href="#">Зарегистрироваться</StyledLinkSignUp>
    </>
  );
});
