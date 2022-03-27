import * as React from 'react';
import * as Styled from './menu-item.styled';
import classNames from 'classnames';

export interface MenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * Adds the alert class to the menu item
   *
   * @default false
   */
  alert?: boolean;

  /**
   * Indicates the menu item is disabled
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Disable the default padding
   *
   * @default false
   */
  noPadding?: boolean;

  /**
   * Add the icon component
   *
   * @default undefined
   */
  icon?: React.ReactElement;

  /**
   * Indicates the mnu item is selected
   *
   * @default false
   */
  selected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  alert = false,
  children,
  className,
  icon,
  selected = false,
  ...props
}) => (
  <Styled.MenuItem
    {...props}
    className={classNames(className, { alert, selected })}
  >
    {icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>}
    {children}
  </Styled.MenuItem>
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
