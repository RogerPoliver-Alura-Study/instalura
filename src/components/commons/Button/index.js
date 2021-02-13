import styled, { css } from 'styled-components';
import TextStyleVariantsMap from '../../../theme/foundation/Text';
import get from 'lodash/get';

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  ${TextStyleVariantsMap.smallestException}
  ${function (props) {
    return props.ghost ? ButtonGhost : ButtonDefault;
  }}
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

const ButtonDefault = css`
  background-color: ${props =>
    get(props.theme, `colors.${props.variant}.color`)};
  color: ${props => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

const ButtonGhost = css`
  color: ${props => get(props.theme, `colors.${props.variant}.color`)};
  background-color: transparent;
`;
