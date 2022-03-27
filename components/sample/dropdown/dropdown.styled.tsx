import styled from 'styled-components';
import Menu from '../../ui/menu/menu-item';
import IconButton from '@/components/ui/icon-button';

export const Container = styled.div`
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  display: flex;
  height: 2.5rem;
  justify-content: space-between;
  margin-right: 25px;
  padding: 0 0.5rem;
  width: 225px;
`;

export const MenuItem = styled(Menu)`
  span {
    flex: 1;
    white-space: nowrap;
  }

  a {
    flex: 1;
  }
`;

export const Text = styled.div`
  line-height: 2.5rem;
  width: 225px;
`;

export const DropdownButton = styled(IconButton)`
  align-items: center;  
  display: flex;
`;
