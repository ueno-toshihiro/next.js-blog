import * as React from 'react';
import * as Styled from './text-area.styled';

export interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => (
  <Styled.Textarea {...props} ref={ref} />
));

export default Textarea;