import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@components/Form';
import styled from 'styled-components';

const EmailWrapper = styled.div`
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

export const Email = React.memo(() => {
  const [fieldValue, setFieldValue] = useState('');
  const history = useHistory();

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  const handleButtonClick = () => {
    history.push('/login/password/');
  };

  return (
    <EmailWrapper>
      <StyledTitle>dish parser</StyledTitle>
      <Form
        fieldType="email"
        onChange={handleFieldChange}
        value={fieldValue}
        buttonTitle="Продолжить"
        onButtonClick={handleButtonClick}
      />
    </EmailWrapper>
  );
});
