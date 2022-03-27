import * as React from 'react';
import * as Styled from './menu.styled';
import { MenuItemProps } from './menu-item/menu-item';

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * Menu item or array of menu items to display in the menu
   */
  children:
    | React.ReactElement<MenuItemProps>
    | Array<React.ReactElement<MenuItemProps>>;

  /**
   * React reference to the menu component
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  innerRef?: any;
  onOpenMenu?: () => void;
}

const Menu: React.FC<MenuProps> = ({
  children,
  innerRef,
  onOpenMenu,
  ...props
}) => {
  React.useEffect(() => {
    onOpenMenu && onOpenMenu();
  }, [onOpenMenu]);

  return (
    <Styled.Menu {...props} ref={innerRef}>
      {children}
    </Styled.Menu>
  );
};

Menu.displayName = 'Menu';

export default Menu;
