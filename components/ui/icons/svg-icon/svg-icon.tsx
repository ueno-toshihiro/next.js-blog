import * as React from 'react';
import * as Styled from './svg-icon.styled';
import classNames from 'classnames';

export interface Props extends React.SVGAttributes<SVGElement> {
  color?: string;
  diameter?: number;
  disabled?: boolean;
  rotate?: number;
  matrix?: [number, number, number, number, number, number];
  spin?: boolean;
  spinDirection?: 'normal' | 'reverse';
  titleAccess?: string;
  viewBox?: string;
}

export const SvgIcon: React.FC<Props> = ({
  children,
  className,
  color = 'currentColor',
  diameter = 25,
  matrix,
  rotate = 0,
  spin = false,
  spinDirection = 'normal',
  style,
  titleAccess,
  viewBox = '0 0 25 25',
  ...props
}) => {
  const matrixValues = matrix ? `matrix(${matrix})` : '';
  return (
    <Styled.Svg
      {...props}
      aria-hidden={titleAccess ? 'false' : 'true'}
      className={classNames(className, {
        spin,
      })}
      focusable="false"
      spinDirection={spinDirection}
      style={{
        ...style,
        fill: props.fill || 'rgb(0, 0, 0, 0)',
        height: diameter,
        stroke: color,
        transform: `rotate(${rotate}deg) ${matrixValues}`,
        width: diameter,
      }}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {titleAccess ? <title>{titleAccess}</title> : null}
      {children}
    </Styled.Svg>
  );
};

SvgIcon.displayName = 'SvgIcon';

export default SvgIcon;
