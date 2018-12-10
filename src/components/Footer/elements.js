import styled from 'styled-components';
import { sizes } from '../../constants';

import { ReactComponent as CustomLogo } from '../../assets/logo.svg';
import { ReactComponent as CustomHeart } from '../../assets/heart.svg';

export const Footer = styled.footer`
  max-width: ${sizes.mobile}px;
  padding: 10px ${props => (props.windowWidth > sizes.mobile) ? ((props.windowWidth - sizes.mobile) / 2) + "px" : "0px"};
  position: relative;
  text-align: center;
  color: rgba(0,0,0,.45);
  font-size: 18px;
  line-height: 40px;
`;

export const Heart = styled(CustomHeart)`
  fill: red;
  height: 14px;
  width: 14px;
  margin: 0 5px;
`;

export const Logo = styled(CustomLogo)`
  height: 14px;
  width: 14px;
  margin-left: 5px;
`;
