import styled from 'styled-components';

const radius = 15;
export const height = radius * 2;
export const width = 260;
const rangeBgColor = 'c647f9';
const rangeThumbColor = '#03A9F4';

const thumbStyle = `
  background: ${rangeThumbColor};
  border: 1px solid ${rangeBgColor};
  border-radius: ${radius}px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  height: ${height}px;
  margin-top: -10px;
  width: ${height}px;
`;

export const Slider = styled.div`
  cursor: pointer;
  height: ${height}px;
  position: relative;
  width: ${width}px;

  &::before {
    background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 220 14"><path fill="%23${rangeBgColor}" d="M217.57733,0.004 L1.06932128,11.873 C0.439997189,11.907 -0.0365561996,12.382 0.00220651616,12.933 L0.00220651616,12.933 C0.0398291521,13.46 0.539184138,13.871 1.14000623,13.871 L1.14000623,13.871 L217.71984,13.871 C218.979629,13.871 220,12.976 220,11.871 L220,11.871 L220,2 C220,0.895 218.979629,1.13686838e-13 217.71984,1.13686838e-13 L217.71984,1.13686838e-13 C217.671957,1.13686838e-13 217.625214,0.001 217.57733,0.004 L217.57733,0.004 Z" /></svg>')
      no-repeat center center;
    bottom: 3px;
    content: '';
    display: block;
    height: 24px;
    margin-left: 10px;
    position: absolute;
    width: 240px;
    z-index: 0;
  }
`;

export const Range = styled.input`
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
  background: #0000;
  margin: 10px 0;
  width: 100%;
  position: relative;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    ${thumbStyle}
  }

  &::-moz-range-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    ${thumbStyle}
  }

  &::-ms-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
  }

  &::-ms-fill-lower {
    background: #0000;
  }

  &::-ms-fill-upper {
    background: #0000;
  }

  &::-ms-thumb {
    ${thumbStyle}
  }

  &:focus::-ms-fill-lower {
    background: #0000;
  }

  &:focus::-ms-fill-upper {
    background: #0000;
  }
`;
