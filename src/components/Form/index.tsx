import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Link, useHistory } from 'react-router-dom';
import { validation } from '@components/Form/utils/validation';
import BackButton from '../../icons/IconBack.svg';

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

type Props = {
  fieldType: string,
  bottomLinkTitle: string,
  buttonTitle: string,
  inputPlaceholder: string,
  formHasBackButton: boolean,
};

export const Form: React.FC<Props> = React.memo(
  ({ fieldType, bottomLinkTitle, buttonTitle, inputPlaceholder, formHasBackButton }) => {
    const [fieldValue, setFieldValue] = useState('');
    const [fieldHasError, setFieldHasError] = useState('');

    const history = useHistory();

    const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(event.target.value);
      setFieldHasError(validation[fieldType](event.target.value));
    };
    const handleButtonClick = () => {
      history.push(`/login/${fieldType}`);
    };

    return (
      <FormWrapper>
        {formHasBackButton && <BackButton />}
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
        <StyledLinkEmail to={`/login/${fieldType}/`}>{bottomLinkTitle}</StyledLinkEmail>
        <StyledLinkSignUp to="/register/">Зарегистрироваться</StyledLinkSignUp>
      </FormWrapper>
    );
  },
);
