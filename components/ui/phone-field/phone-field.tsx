import * as React from 'react';
import * as Styled from './phone-field.styled';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const PhoneField: React.FC<Props> = ({
  value,
  onChange,
}) => {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  return (
    <Styled.Phone
      placeholder="Enter phone number"
      value={value}
      onChange={onChange}
      defaultCountry="JP"
    />
  )
};

export default PhoneField;
