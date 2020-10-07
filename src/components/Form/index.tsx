import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Link } from 'react-router-dom';

type Props = {
  fieldType: string,
  onChange(event: ChangeEvent<HTMLInputElement>): void,
  value: string,
  bottomLinkTitle?: string,
  buttonTitle: string,
  onButtonClick?: () => void,
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

const StyledLink = styled(Link)`
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

export const Form: React.FC<Props> = React.memo(
  ({ fieldType, bottomLinkTitle, buttonTitle, onButtonClick }) => {
    const [fieldHasError, setFieldHasError] = useState(true);
    const [fieldValue, setFieldValue] = useState('');

    const validateFieldByType = (value: string) => {
      switch (fieldType) {
        case 'phone':
          setFieldHasError(!/^((\+7|7|8)+([0-9]){10})$/.test(value));
          break;
        case 'email':
          setFieldHasError(
            !/^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              value,
            ),
          );
          break;
        case 'password':
          setFieldHasError(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value));
          break;
        default:
          return false;
      }
      return false;
    };

    const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(event.target.value);
      validateFieldByType(event.target.value);
    };

    const renderCommonInput = (type: string, placeholder: string) => {
      return (
        <Input
          type={type}
          placeholder={placeholder}
          onChange={handleFieldChange}
          value={fieldValue}
        />
      );
    };

    const renderInputByType = () => {
      switch (fieldType) {
        case 'phone':
          return renderCommonInput('tel', 'Телефон');
        case 'email':
          return renderCommonInput('email', 'E-mail');
        case 'password':
          return renderCommonInput('password', 'Пароль');
        default:
          return false;
      }
    };

    return (
      <>
        <StyledForm>
          {renderInputByType()}
          <Button
            title={buttonTitle}
            type="submit"
            onClick={onButtonClick}
            marginTop="24px"
            disabled={fieldHasError}
          />
        </StyledForm>
        <StyledLinkEmail to="/login/email/">{bottomLinkTitle}</StyledLinkEmail>
        <StyledLinkSignUp to="/register/">Зарегистрироваться</StyledLinkSignUp>
      </>
    );
  },
);
