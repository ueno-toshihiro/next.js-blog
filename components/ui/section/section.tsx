import * as React from 'react';
import * as Styled from './section.styled';

type Props = {
  noPadding?: boolean;
  children?: React.ReactNode;
}

const Section: React.FC<Props> = ({ children, noPadding }) => (
  <Styled.Section noPadding={noPadding}>{children}</Styled.Section>
);

Section.displayName = 'Section';

export default Section;