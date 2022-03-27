import * as React from 'react';
import * as Styled from '@/components/ui/ui.styled';
import Layout from '@/components/layout';
import Button from '@/components/ui/button';
import ButtonToggle from '@/components/ui/button-toggle';
import ClipBoardCopy from '@/components/ui/clip-board-copy';
import TextArea from '@/components/ui/text-area';
import TextField from '@/components/ui/text-field';
import Table from '@/components/ui/table';
import PhoneField from '@/components/ui/phone-field';
import { ArrowDown, ArrowLeft } from '@/components/ui/icons';
import IconButton from '../../components/ui/icon-button';
import IconLink from '../../components/ui/icon-link';
import Slider from '../../components/ui/slider';
import TextData2TextHtml from '../../components/textData2TextHtml';
import StretchText from '../../components/ui/stretchText';
import CircleAngle from '../../components/ui/circle-angle';
import Dropdown from '../../components/sample/dropdown';
import ToggleCheck from '../../components/sample/toggle-check';

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

      {/* Toggle check */}
      <Styled.Section>
        <p>Toggle Check Button</p>
        <ToggleCheck />
      </Styled.Section>

      {/* text field */}
      <Styled.Section>
        <p>Text field</p>
        <TextField onChange={(e) => console.log(e.target.value)} />
      </Styled.Section>

      {/* text area */}
      <Styled.Section>
        <p>Text field</p>
        <TextArea
          onChange={(e) => console.log(e.target.value)}
          style={{ width: '460px' }}
          rows={4}
        />
      </Styled.Section>

      {/* text data to text html sample*/}
      <Styled.Section>
        <p>Text data to text html sample</p>
        <TextData2TextHtml />
      </Styled.Section>

      {/* Clip board copy */}
      <Styled.Section>
        <p>Clip board copy</p>
        <ClipBoardCopy text="default text!!" />
      </Styled.Section>

      {/* DorpDown menu */}
      <Styled.Section
        style={{ position: 'relative',zIndex: 11 }}
      >
        <p>DropDown menu</p>
        <Dropdown />
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

      <Styled.Section>
        <p>Stretch text</p>
        <div
          style={{
            height: '4rem',
            margin: '0 0 0 12rem',
            position: 'relative',
          }}
        >
          <StretchText
            maxWidth={450}
            style={{
              position: 'absolute',
              bottom: 0,
            }}
          >
            Hovering over this element will extend it to 450px
          </StretchText>
        </div>
      </Styled.Section>

      <Styled.Section>
        <p>Circle Angle</p>
        <CircleAngle />
      </Styled.Section>

    </Layout>
  );
}
