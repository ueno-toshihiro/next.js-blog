import * as React from 'react';
import * as Styled from './dropdown.styled';
import DropdownMenu from '@/components/ui/dropdown-menu';
import IconButton from '@/components/ui/icon-button';
import { ArrowDown } from '@/components/ui/icons';

const Dropdown: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState('');
  const onSelect = React.useCallback((value: string) => {
    setSelectedValue(value);
  }, []);

  return (
    <Styled.Container>
      <Styled.Text>{selectedValue}</Styled.Text>
      <DropdownMenu
        toggleType="elements"
        elements={
          <Styled.DropdownButton onClick={() => console.log('Icon Click!')}>
            <ArrowDown diameter={32} color={'#fff'} />
          </Styled.DropdownButton>

        }
        placement="bottom-start"
        arrowStyle={{ transform: 'translate(7px, 0)' }}
      >
        <Styled.MenuItem
          onSelect={() => onSelect('menu 1')}
          // icon={<CheckMark diameter={30} />}
        >
          Menu 1
        </Styled.MenuItem>
        <Styled.MenuItem
          onSelect={() => onSelect('menu 2')}
          // icon={<CheckMark diameter={30} />}
        >
          Menu 2
        </Styled.MenuItem>
      </DropdownMenu>
    </Styled.Container>
  );
};

export default Dropdown;
