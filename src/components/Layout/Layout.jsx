import { Container } from 'components/Layout/Layout.styled';
import React from 'react';

export const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};
