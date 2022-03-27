import * as React from 'react';
import * as Styled from './toggle-button.styled';
import Toggle from 'react-toggle';

interface Props {
  checked: boolean;
  onChange: (x: boolean) => void;
  offText: string;
  onText: string;
  rightMargin?: string;
  toggleDescription?: string | JSX.Element;
  compact?: boolean;
  disabled?: boolean;
}

const ToggleButton: React.FC<Props> = ({
  checked,
  onChange,
  offText,
  onText,
  rightMargin = '0',
  toggleDescription,
  compact = false,
  disabled = false,
}) => {
  const opacity: number | string = disabled ? 0.5 : 'inherit';

  return (
    <Styled.ToggleContainer
      rightMargin={rightMargin}
      checked={checked}
      compact={compact}
    >
      {toggleDescription && (
        <Styled.Description compact={compact} style={{ opacity: opacity }}>
          {toggleDescription}
        </Styled.Description>
      )}
      <Styled.ToggleBlock>
        <Styled.OffText style={{ opacity: opacity }}>{offText}</Styled.OffText>
        <Styled.ToggleWrapper>
          <Toggle
            checked={checked}
            icons={false}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
          />
        </Styled.ToggleWrapper>
        <Styled.OnText checked={checked} style={{ opacity: opacity }}>
          {onText}
        </Styled.OnText>
      </Styled.ToggleBlock>
    </Styled.ToggleContainer>
  );
};

export default ToggleButton;
