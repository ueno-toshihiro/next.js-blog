import * as React from 'react';
import * as Styled from './phone-field.styled';
import TextField from '../text-field';
import PhoneInput from 'react-phone-number-input';

interface Props {
  isUseInputComponent?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const PhoneField: React.FC<Props> = ({
  isUseInputComponent = false,
  value,
  onChange,
}) => {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  // defaultCountry refer to here
  // https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  return (
    <>
      {
        !isUseInputComponent ? (
          <Styled.Phone
            placeholder="Enter phone number"
            value={value}
            onChange={onChange}
            defaultCountry="JP"
          />
        ) : (
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={onChange}
            defaultCountry="JP"
            inputComponent={TextField}
          />
        )
      }
    </>
  )
};

export default PhoneField;
