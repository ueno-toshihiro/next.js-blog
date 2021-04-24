import * as React from 'react';
import * as Styled from './ui.styled';
import { useState } from 'react';
import Layout from '@/components/layout';
import Button from '@/components/ui/button';
import ButtonToggle from './button-toggle';

enum Toggle {
  item1,
  item2
}

export default function Index(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState(Toggle.item1); // default Toggle.item1

  const onToggle = React.useCallback((selected: Toggle) => {
    setSelectedItem(selected);
  }, []);

  return (
    <Layout>
      <Styled.Title>UI Components</Styled.Title>

      {/* Button */}
      <Styled.Section>
        <p>Button</p>
        <Button>ボタン</Button>
      </Styled.Section>

      {/* Toggle button */}
      <Styled.Section>
        <p>Toggle button</p>
        <ButtonToggle />
      </Styled.Section>

    </Layout>
  );
}
