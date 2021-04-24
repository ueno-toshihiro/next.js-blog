import styled from 'styled-components';
import { darken, lighten } from 'polished';

const buttonReset = `
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
`

const buttonDefault = `
  border-radius: 0.5rem;
  cursor: pointer;
  color: #212529;
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.5;
  padding: 0.5rem 2rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  vertical-align: middle;
`;

export const Button = styled.button`
	${buttonDefault}
	${buttonReset}

	background: #03A9F4;
	border-radius: 4px;
	border: solid 1px #0f9ada;
	box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
	color: #FFF;
	display: inline-block;
	padding: 0.25em 0.5em;
	position: relative;
	text-decoration: none;
	text-shadow: 0 1px 0 rgba(0,0,0,0.2);

  :hover {
    background: ${lighten(0.1, '#03A9F4')};
    border: solid 1px ${lighten(0.1, '#0f9ada')};
  }

  :active {
		background: ${darken(0.1, '#03A9F4')};
    border: solid 1px ${darken(0.1, '#0f9ada')};
		box-shadow: none;
		text-shadow: none;
	}
`;
