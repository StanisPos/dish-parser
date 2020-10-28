import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

type Props = {
  type: 'phone' | 'email' | 'password';
  placeholder: string;
  marginTop?: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  value: string;
};

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 24px;
  margin-top: ${(props: Props) => props.marginTop || 0};
  border-radius: 16px;
  box-shadow: 0 2px 0 rgba(215, 215, 215, 0.16);
  outline: none;
  border: 1px solid #ff7a00;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #313143;

  &::placeholder {
    color: rgba(215, 215, 215, 0.55);
  }
`;

export const Input: React.FC<Props> = React.memo(
  ({ type, placeholder, marginTop, onChange, value }) => {
    return (
      <StyledInput
        type={type}
        placeholder={placeholder}
        marginTop={marginTop}
        onChange={onChange}
        value={value}
      />
    );
  },
);
