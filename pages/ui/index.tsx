import * as React from 'react';
import * as Styled from '@/components/ui/ui.styled';
import Layout from '@/components/layout';
import Button from '@/components/ui/button';
import ButtonToggle from '@/components/ui/button-toggle';
import ClipBoardCopy from '@/components/ui/clip-board-copy';
import TextField from '@/components/ui/text-field';

export default function Index(): JSX.Element {
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

      {/* text field */}
      <Styled.Section>
        <p>Text field</p>
        <TextField onChange={(e) => console.log(e.target.value)} />
      </Styled.Section>

      {/* Clip board copy */}
      <Styled.Section>
        <p>Clip board copy</p>
        <ClipBoardCopy text="default text!!" />
      </Styled.Section>
    </Layout>
  );
}
