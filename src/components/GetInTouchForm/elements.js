import styled, { keyframes } from 'styled-components';

import CustomButton from '../Button';
import { ReactComponent as CustomSend } from '../../assets/send.svg';
import { ReactComponent as CustomLoading } from '../../assets/loading.svg';
import { ReactComponent as CustomCheck } from '../../assets/check.svg';

export const h3 = styled.h3`
  margin: 0 0 10px 0;
  font-weight: 400;
  line-height: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  box-sizing: border-box;
  margin: 8px 0;
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 4px 11px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0,0,0,.85);
  background-color: ${props => (props.disabled) ? "#f3f3f3" : "#fff"};
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all .3s;
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  margin: 8px 0;
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 4px 11px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0,0,0,.85);
  background-color: ${props => (props.disabled) ? "#f3f3f3" : "#fff"};;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all .3s;
  min-height: 80px;
`;

export const Button = styled(CustomButton)`
  margin-top: 8px;
  background: ${props => (!props.sending ? (!props.success ? "linear-gradient(to right, #FF9900 , #FF0000)" : "linear-gradient(to left, #56ab2f, #a8e063)")
    : "linear-gradient(to right, #4ecdc4, #556270)")};
  width: 100%;
`;

export const Send = styled(CustomSend)`
  height: 12px;
  transform: scale(1.5);
  fill: #fff;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled(CustomLoading)`
  width: 20px;
  height: 20px;
  animation: ${ rotate} .6s ease-in-out infinite;
  fill: #fff;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
`;

export const Check = styled(CustomCheck)`
  height: 12px;
  transform: scale(1.5);
  fill: #fff;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
`;
