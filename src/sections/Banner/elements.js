import styled, { keyframes } from 'styled-components';

import CustomSection from '../../components/Section';
import { ReactComponent as CustomDevices } from '../../assets/banner-bg.svg';
import CustomButton from '../../components/Button';

export const Section = styled(CustomSection)`
  background-image: linear-gradient(to right, #4A86E8 , #60019F);
  min-height: 500px;
  position: relative;
  overflow-x: hidden;
`;

const float = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-5px);
  }
  100% {
    transform: translatey(0px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scaleX(1);
    transform: translatex(0px);
  }
  50% {
    transform: scaleX(1.1);
    transform: translatex(-5px);
  }
  100% {
    transform: scaleX(1);
    transform: translatex(0px);
  }
`;

export const Devices = styled(CustomDevices)`
  position: absolute;
  top: 5px;
  height: 450px;

  /* media query for when screen reaches svg size */
  @media (min-width: 462px) {
    left: auto;
    right: 0;
  }

  @media (min-width: 768px) {
    #background > #tablet, #background > #side {
      transform: translatey(0px);
      animation: ${float} 6s ease-in-out infinite;
    }

    #background > g:first-of-type {
      transform: translatey(0px);
      animation: ${pulse} 6s ease-in-out infinite;
    }
  }
`;

export const h2 = styled.h2`
  font-weight: 600;
  line-height: 30px;
  max-width: 120px;
  font-size: 2em;
  margin: 0 0 340px 0;
  padding-top: 16px;
  color: rgba(255,255,255,.95);

  @media (min-width: 768px) {
    line-height: 40px;
    font-size: 2.5em;
    margin: 0 0 310px 0;
  }
`;

export const Button = styled(CustomButton)`
  @media (min-width: 480px) {
    transform: scale(1.2) translateX(10%);
  }
`;
