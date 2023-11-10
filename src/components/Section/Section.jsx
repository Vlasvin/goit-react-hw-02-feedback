import React from 'react';
import { Title, SectionWrapper } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
};
