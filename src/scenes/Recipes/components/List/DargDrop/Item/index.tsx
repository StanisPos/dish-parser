import * as React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { BaseSyntheticEvent } from 'react';
import { Dish } from '@ducks/dishes/interfaces';

const StyledCol = styled(Col)`
  min-width: 334px;
  min-height: 80px;
  padding: 20px 24px;

  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  border-radius: 16px;
  box-shadow: 0 2px 0 rgba(215, 215, 215, 0.16);
  outline: none;

  &:hover {
    box-shadow: 0 2px 3px rgba(215, 215, 215, 0.56);
  }
`;

const StyledTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.1rem;
`;

const StyledImage = styled.img`
  max-width: 48px;
  max-height: 48px;
`;

const StyledDescription = styled.p`
  font-weight: 900;
`;

let touchTimeout: number;

const setStylesTouchStart = (evt: BaseSyntheticEvent): void => {
  const target = evt.currentTarget;
  touchTimeout = setTimeout(() => {
    target.style.boxShadow = '0 2px 3px rgba(215, 215, 215, 0.56)';
  }, 300);
};

const setStylesTouchEnd = (evt: BaseSyntheticEvent): void => {
  clearTimeout(touchTimeout);
  evt.currentTarget.style.boxShadow = '';
};

export const Item: React.FC<Dish> = React.memo(({ name, image, description, quantity, units }) => (
  <StyledCol xs onTouchStart={setStylesTouchStart} onTouchEnd={setStylesTouchEnd}>
    <StyledImage src={image} alt={name} />
    <div>
      <StyledTitle>{name}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </div>
    <div>{`${quantity} ${units}`}</div>
  </StyledCol>
));
