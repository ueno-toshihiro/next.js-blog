import * as React from 'react';
import * as Styled from './toggle-check.styled';
import Toggle from '@/components/ui/toggle-button';

const Dropdown: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState(false);
  const onChange = React.useCallback((value: boolean) => {
    setSelectedValue(value);
  }, []);

  return (
    <Styled.WrapperCheckbox>
        <Styled.Label>Please click the toggle button.</Styled.Label>
        <Styled.ToggleBlock>
          <Styled.ToggleWrapper>
            <Toggle
              offText={'OFF'}
              onText={'ON'}
              checked={selectedValue}
              onChange={onChange}
            />
          </Styled.ToggleWrapper>
        </Styled.ToggleBlock>
      </Styled.WrapperCheckbox>
  );
};

export default Dropdown;
