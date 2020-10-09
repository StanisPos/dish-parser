import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  margin-bottom: 20px;
`;

const StyledCol = styled(Col)`
  max-width: ${({ widthTest }) => widthTest !== 100 && `${Math.floor((334 * widthTest) / 100)}px`};
  width: 334px;
  min-height: 80px;
  padding: 20px 24px;

  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  border-radius: 16px;
  box-shadow: 0 2px 0 rgba(215, 215, 215, 0.16);
  outline: none;

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0 2px 3px rgba(215, 215, 215, 0.46);
  }
`;

const StyledTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.1rem;
`;

const StyledImage = styled.img`
  min-width: 48px;
  min-height: 48px;
`;

export const RecipeItem: React.FC<any> = React.memo(({ name, image, handleSlim }) => {
  const [widthTest, setWidth] = React.useState(100);

  return (
    <StyledRow>
      <StyledCol xs tabIndex={0} onMouseDown={handleSlim} widthTest={widthTest}>
        <StyledImage src={image} alt={name} />
        <StyledTitle>{name}</StyledTitle>
      </StyledCol>
    </StyledRow>
  );
});
