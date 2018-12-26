import styled, { keyframes } from 'styled-components';

import CustomCard from '../Card';
import CustomButton from '../Button';
import { ReactComponent as CustomClose } from '../../assets/close.svg';

const show = keyframes`
  0% {
    display: none;
  }
  10%, 100% {
    display: block;
  }
`;

export const Card = styled(CustomCard)`
  opacity: ${props => (props.hidden ? "0" : "1")};
  display: ${props => (!props.hidden ? "block" : "none")};
  animation: ${show} .3s;
  padding: 24px;
  max-width: 420px;
  width: 80%;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Overlay = styled.div`
  background-color: rgb(0,0,0);
  opacity: ${props => (props.hidden ? "0" : ".85")};
  display: ${props => (!props.hidden ? "block" : "none")};
  animation: ${show} .3s;
  width: 100vw;
  height: 100vh;
  transition: background-color .3s cubic-bezier(.645,.045,.355,1);
  z-index: 899;
  position: fixed;
  cursor: pointer;
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
  box-shadow: none;
`;
