import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Link, useHistory } from 'react-router-dom';
import { validation } from '@components/Form/utils/utils';
import { ReactComponent as BackButton } from '../../icons/icon-back.svg';

type Props = {
  fieldType: 'phone' | 'email' | 'password';
  bottomLinkTitle?: string;
  buttonTitle: string;
  inputPlaceholder: string;
  formHasBackButton: boolean;
  bottomLinkUrl?: string;
  submitButtonUrl: string;
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

const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 97px;
  cursor: pointer;
`;

const StyledLinkEmail = styled(StyledLink)`
  margin-top: 40px;
`;

const StyledLinkSignUp = styled(StyledLink)`
  margin-top: 85px;
`;

const FormWrapper = styled.div`
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

export const Form: React.FC<Props> = React.memo(
  ({
    fieldType,
    bottomLinkTitle,
    buttonTitle,
    inputPlaceholder,
    formHasBackButton,
    bottomLinkUrl,
    submitButtonUrl,
  }) => {
    const [fieldValue, setFieldValue] = useState('');
    const [fieldHasError, setFieldHasError] = useState(true);

    const history = useHistory();

    const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(event.target.value);
      setFieldHasError(validation[fieldType](event.target.value));
    };

    const handleButtonClick = () => {
      history.push(submitButtonUrl);
    };

    const handleBackButtonClick = () => {
      history.goBack();
    };

    return (
      <FormWrapper>
        {formHasBackButton && <StyledBackButton onClick={handleBackButtonClick} />}
        <StyledTitle>dish parser</StyledTitle>
        <StyledForm>
          <Input
            type={fieldType}
            placeholder={inputPlaceholder}
            onChange={handleFieldChange}
            value={fieldValue}
          />
          <Button
            title={buttonTitle}
            type="submit"
            onClick={handleButtonClick}
            marginTop="24px"
            disabled={fieldHasError}
          />
        </StyledForm>
        {bottomLinkUrl && bottomLinkTitle && (
          <StyledLinkEmail to={bottomLinkUrl}>{bottomLinkTitle}</StyledLinkEmail>
        )}
        <StyledLinkSignUp to="/register/">Зарегистрироваться</StyledLinkSignUp>
      </FormWrapper>
    );
  },
);
