import * as React from 'react';
import * as Styled from './clip-board-copy.styled';
import Copy from 'copy-to-clipboard';
import Button from '@/components/ui/button';
import TextField from '../text-field';

interface Props {
  text: string;
}

const ClipBoardCopy: React.FC<Props> = ({ text }) => {
  const [inputText, setInputText] = React.useState<string>(text);
  const [showCopied, setShowCopied] = React.useState<boolean>(false);
  
  const onClick = React.useCallback(() => {
    Copy(inputText);
    setShowCopied(true);
  }, [inputText]);

  const onCopiedEnd = () => {
    setShowCopied(false);
  }

  return (
    <Styled.Wrapper>
      <TextField
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Styled.CopiedWrapper>
        <Button onClick={onClick}>TEXT COPY</Button>
        {showCopied && <Styled.Copied onAnimationEnd={onCopiedEnd}>コピーしました</Styled.Copied>}
      </Styled.CopiedWrapper>
    </Styled.Wrapper>
  );
};

export default ClipBoardCopy;
