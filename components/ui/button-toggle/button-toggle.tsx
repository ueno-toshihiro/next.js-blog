/** 
 * enum を使ってトグルボタンの状態を管理する
 */
import * as React from 'react';
import * as Styled from './button-toggle.styled';
import { useState } from 'react';
import Button from '@/components/ui/button';

enum Toggle {
  item1,
  item2
}

export default function Index(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState(Toggle.item1); // default Toggle.item1

  return (
    <Styled.ButtonWrapper>
      <Button
        onClick={() => setSelectedItem(Toggle.item1)}
        status={selectedItem === Toggle.item1}
      >
        ボタン
      </Button>
      <Button
        onClick={() => setSelectedItem(Toggle.item2)}
        status={selectedItem === Toggle.item2}
      >
        ボタン
      </Button>
    </Styled.ButtonWrapper>
  );
}
