import * as React from 'react';
import * as Styled from './specials.styled';
import Section from '@/components/ui/section';
import Link from 'next/link';

const Specials: React.FC = () => {

  return (
    <Styled.Container>
      <Section>
        <Styled.Title>Components</Styled.Title>

        {/* UI Components */}
        <Styled.Content>
          <Styled.LinkContainer>
            <Link as={'/ui'} href={`/ui`}>
              <a>UI Components</a>
            </Link>
          </Styled.LinkContainer>
          <Styled.Description>
            各種UIコンポーネントの一覧です。
          </Styled.Description>
        </Styled.Content>

        {/* PDF Viewer */}
        <Styled.Content>
          <Styled.LinkContainer>
            <Link as={`/pdf`} href={`/pdf`} passHref>
              <a>PDF Viewer</a>
            </Link>
          </Styled.LinkContainer>
          <Styled.Description>
            PDF をアップロードとして、画像として表示します。<br/>
            PDF のページごとに分割された画像はページ送りで表示します。
          </Styled.Description>
        </Styled.Content>
      </Section>
    </Styled.Container>
  );
}

Specials.displayName= 'Specials'

export default Specials;
