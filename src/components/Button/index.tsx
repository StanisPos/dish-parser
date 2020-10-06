import React from 'react';
import styled from 'styled-components';

type Props = {
  title?: string,
  type: 'button' | 'submit' | 'reset',
  disabled?: boolean,
  onClick(): void,
  marginTop?: string,
};

const StyledButton = styled.button`
  padding: 14px 95px;
  background: linear-gradient(180deg, #ff7a00 0%, #ffd322 100%);
  box-shadow: 0 2px 0 rgba(215, 215, 215, 0.16);
  border-radius: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #fffefd;
  border: none;
  outline: none;
  margin-top: ${(props: Props) => props.marginTop};

  &:disabled {
    background: rgba(215, 215, 215, 0.75);
  }
`;

export const Button: React.FC<Props> = React.memo(
  ({ title, type, disabled, onClick, marginTop }) => {
    return (
      <StyledButton
        type={type}
        onClick={onClick}
        disabled={disabled || false}
        marginTop={marginTop}
      >
        {title}
      </StyledButton>
    );
  },
);
