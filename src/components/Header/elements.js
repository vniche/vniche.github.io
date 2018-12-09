import styled from 'styled-components';
import { sizes } from '../../constants';

import { ReactComponent as CustomLogo } from '../../assets/logo.svg';
import CustomButton from '../Button';
import CustomWrapper from '../Wrapper';

export const Wrapper = styled(CustomWrapper)`
  min-height: 64px;
  height: 64px;
  margin: 0  ${props => (props.windowWidth > sizes.mobile) ? ((props.windowWidth - sizes.mobile) / 2) + "px" : "0px"} !important;
  background: #fff;
`;

export const Icon = styled.i`
  height: 64px;
  vertical-align: top;
  display: inline-block;
  cursor: pointer;
  font-size: 20px;
`;

export const Logo = styled(CustomLogo)`
  height: 32px;
  width: 32px;
  padding: 16px;
`;

export const RightMenu = styled.div`
  float: right;
  height: 100%;
  overflow: hidden;
`;

export const Button = styled(CustomButton)`
  margin: 16px;
`;
