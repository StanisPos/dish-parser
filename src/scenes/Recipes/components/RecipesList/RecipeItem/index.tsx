import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  margin-bottom: 20px;
`;

const StyledCol = styled(Col)`
  text-align: center;
`;

export const RecipeItem: React.FC<any> = React.memo(props => (
  <StyledRow>
    <StyledCol xs>{props.name}</StyledCol>
  </StyledRow>
));
