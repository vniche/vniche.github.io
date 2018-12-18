import styled from 'styled-components';

import CustomCard from '../Card';
import CustomButton from '../Button';
import { ReactComponent as CustomClose } from '../../assets/close.svg';

export const Card = styled(CustomCard)`
  display: ${props => (props.hidden ? "none" : "block")};
  padding: 24px;
  max-width: 420px;
  width: 80%;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  z-index: 999;
  position: fixed;
  left:0;
  right:0;
  margin:0 auto;
  transform: translateY(50%);
`;

export const Button = styled(CustomButton)`
  position: absolute;
  top: 0px;
  right: 0px;
  background: none;
  border: none;
  min-width: 30px;
  width: 30px;
  padding: 2px;
`;

export const Close = styled(CustomClose)`
  width: 20px;
  height: 20px;
  fill: rgba(0,0,0,.85);
`;
