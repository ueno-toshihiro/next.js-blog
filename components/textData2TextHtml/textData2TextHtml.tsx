import * as React from 'react';
import * as Styled from './textData2TextHtml.styled';
import escape from 'escape-html';
import TextArea from '../ui/text-area';

const textData = `1行目テキスト\n2行目テキスト\n3行目テキスト`;

const TextData2TextHtml: React.FC = () => {
  const [text, setText] = React.useState(textData);

  const escapeText = React.useMemo(() => {
    return escape(text || '')
    .replace(/javascript:/g, '')
    .replace(/\n/g, '<br />');
  }, [text]);

  return (
    <>
      <TextArea
        onChange={(e) => setText(e.target.value)}
        style={{ width: '460px' }}
        rows={4}
        value={text}
      />

      <Styled.Label>input text 改行コード入り</Styled.Label>
      <Styled.OutputArea>{text}</Styled.OutputArea>
      
      <Styled.Label>text html 改行コードを BR に変換</Styled.Label>
      <Styled.OutputArea dangerouslySetInnerHTML={{
        __html: escapeText
      }} />
    </>
  );
};

export default TextData2TextHtml;