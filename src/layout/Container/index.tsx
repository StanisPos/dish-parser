import React from 'react';
import { Container as Layout } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Layout)`
  padding: 0 48px;
`;

export const Container: React.FC = React.memo(({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
});
