import * as React from 'react';
import * as Styled from './icon-button.styled';

const IconButton = React.forwardRef<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  React.ButtonHTMLAttributes<HTMLButtonElement>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
>(({ children, ...props }, ref: React.Ref<any>) => (
  <Styled.IconButton ref={ref} {...props}>
    {children}
  </Styled.IconButton>
));

IconButton.displayName = 'IconButton';

export default IconButton;
