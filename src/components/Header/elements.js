import styled from 'styled-components';

import CustomButton from '../Button';

export const Header = styled.header`
  min-height: 64px;
  height: 64px;
  max-width: 960px;
  margin: 0 auto;
  background: #fff;
  position: relative;
`;

export const Icon = styled.i`
  height: 64px;
  vertical-align: top;
  display: inline-block;
  cursor: pointer;
  font-size: 20px;
`;

export const Logo = styled.img`
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