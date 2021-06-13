import * as React from 'react';
import * as Styled from './icon-link.styled';
import NextLink, { LinkProps } from 'next/link';
import classNames from 'classnames';

export interface Props extends LinkProps {
  className?: string;
  disabled?: boolean;
  label?: React.ReactNode;
  style?: React.CSSProperties;
  target?: '_blank' | '_parent' | '_self' | '_top';
}

const IconLink: React.FunctionComponent<Props> = ({
  children,
  className,
  disabled = false,
  label,
  style,
  target = '_self',
  ...props
}) => {
  const linkProps = props;

  if (disabled) {
    linkProps.href = '';
  }

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!disabled) {
      return;
    }
    return event.preventDefault();
  };

  return (
    <NextLink {...linkProps} passHref>
      <Styled.Anchor
        className={classNames(className, { disabled })}
        onClick={onClick}
        style={style}
        target={target}
      >
        {children}
        {label && <Styled.Label>{label}</Styled.Label>}
      </Styled.Anchor>
    </NextLink>
  );
};

IconLink.displayName = 'IconLink';

export default IconLink;
