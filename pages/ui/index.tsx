import * as React from 'react';
import * as Styled from '@/components/ui/ui.styled';
import Layout from '@/components/layout';
import Button from '@/components/ui/button';
import ButtonToggle from '@/components/ui/button-toggle';
import ClipBoardCopy from '@/components/ui/clip-board-copy';
import TextField from '@/components/ui/text-field';
import Table from '@/components/ui/table';
import PhoneField from '@/components/ui/phone-field';
import { ArrowDown, ArrowLeft } from '@/components/ui/icons';
import IconButton from '../../components/ui/icon-button';
import IconLink from '../../components/ui/icon-link';
import Slider from '../../components/ui/slider';


export default function Index(): JSX.Element {
  // PhoneField
  const [phoneFieldValue, setPhoneFieldValue] = React.useState<string>('');
  const [rangeValue, setRangeValue] = React.useState<number>(0.5);

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

      {/* Table */}
      <Styled.Section>
        <p>Table</p>
        <Table />
      </Styled.Section>

      {/* react-phone-number-input */}
      <Styled.Section>
        <p>Phone Field</p>
        <PhoneField
          isUseInputComponent={false}
          value={phoneFieldValue}
          onChange={setPhoneFieldValue}
        />
        <br/>
        <p>Phone Field (use inputComponent)</p>
        <PhoneField
          isUseInputComponent
          value={phoneFieldValue}
          onChange={setPhoneFieldValue}
        />
        <p>{phoneFieldValue}</p>
      </Styled.Section>

      <Styled.Section>
        <p>Icons</p>
        <ArrowDown diameter={32} />
        <ArrowLeft diameter={32} />
      </Styled.Section>
      
      <Styled.Section>
        <p>Icons Button</p>
        <IconButton onClick={() => console.log('Icon Click!')}>
          <ArrowDown diameter={32} color={'#fff'} />
        </IconButton>
      </Styled.Section>

      <Styled.Section>
        <p>Icons Link</p>
        <IconLink
          href={'javascript:console.log("Icon Click!")'}
          label="Icon Link"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <ArrowDown diameter={32} />
        </IconLink>
      </Styled.Section>

      <Styled.Section>
        <p>Range slider</p>
        <Slider
          max={1}
          min={0.1}
          onChange={setRangeValue}
          step={0.05}
          value={rangeValue}
        />
        <p>{rangeValue}</p>
      </Styled.Section>
    </Layout>
  );
}
