import * as React from 'react';
import * as Styled from './slider.styled';

interface Props {
  max: number;
  min: number;
  onChange: (value: number) => void;
  step: number;
  value?: number;
}
const Slider: React.FC<Props> = ({ value, min, max, step, onChange }) => {
  return (
    <Styled.Slider>
      <Styled.Range
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        step={step}
      />
    </Styled.Slider>
  );
};

Slider.displayName = 'Slider';
export default Slider;
