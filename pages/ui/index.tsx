import * as React from 'react';
import * as Styled from './ui.styled';
import { useState } from 'react';
import Layout from '@/components/layout';
import Button from '@/components/ui/button';

export default function Index(): JSX.Element {
  return (
    <Layout>
      <Styled.Title>UI Components</Styled.Title>
      <Styled.Section>
        <Button>ボタン</Button>
      </Styled.Section>
    </Layout>
  );
}
