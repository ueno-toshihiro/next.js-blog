import * as React from 'react';
import * as Styled from './body.styled';
import Button from '@/components/ui/button';

export interface Props {
  item: {
    [key: string]: string;
  };
}

const AnnotationItem: React.FC<Props> = ({
  item,
}) => {
  return (
    <Styled.Tr>
      <Styled.Td>item.date</Styled.Td>
      <Styled.Td data-type="thumbnail"><img src={'dummy-image'} /></Styled.Td>
      <Styled.Td data-type="text">name</Styled.Td>
      <Styled.Td data-type="text">dummy name</Styled.Td>
      <Styled.Td data-type="title">dummy title</Styled.Td>
      <Styled.Td data-type="button"><Button>button</Button></Styled.Td>
    </Styled.Tr>
  );
};

export default AnnotationItem;
