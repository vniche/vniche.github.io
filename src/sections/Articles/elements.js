import styled, { keyframes } from 'styled-components';

import CustomSection from '../../components/Section';
import CustomCard from '../../components/Card';
import CustomButton from '../../components/Button';

export const Section = styled(CustomSection)`
  position: relative;
  overflow-x: hidden;
  padding-bottom: 80px;
`;

export const h3 = styled.h3`
  font-weight: 600;
  line-height: 35px;
  font-size: 1.8em;
  margin: 25px 0 5px 0;
  color: rgba(0,0,0,.85);
`;

export const span = styled.span`
  font-size: 1.2em;
  line-height: 25px;
  color: rgba(0,0,0,.85);
`;

export const h4 = styled.h4`
  font-weight: 400;
  line-height: 35px;
  font-size: 1.4em;
  margin: 25px 0 5px 0;
  color: rgba(0,0,0,.85);
`;

export const Card = styled(CustomCard)`
  margin: 10px 5px 5px 5px;
  min-width: 150px;
  padding: 24px;
  width: calc(100% - (48px + 2px + 10px));
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 6px rgba(0,0,0,.05);
    transform: scale(1.01);
  }

  img {
    max-width: 100%;
    height: 120px;
    display: block;
    margin: 0 auto;
  }
  
  h4 {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin: 1em 0 0 0;
    color: rgba(0,0,0,.85);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
    color: rgba(0,0,0,.85);
    height: auto;
  }

  @media (min-width: 480px) {
    width: calc(50% - (48px + 2px + 10px));
    
    &:not(:first-of-type) {
      margin-top: 10px;
    }
    
    h4 {
      height: 120px;
    }
  }

  @media (min-width: 768px) {
    &:not(:first-of-type) {
      margin-top: 10px;
    }
    width: calc(33.3% - (48px + 2px + 10px));
  }
`;

const load = keyframes`
  0%, 100% {
    transform: translatex(0%);
  }
  50% {
    transform: translatex(-50%);
  }
`;

export const LoadingCard = styled(CustomCard)`
  width: calc(100% - (24px - 2px - 10px));
  margin: 10px 5px 5px 5px;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  height: 250px;
  padding: 0;
  overflow: hidden;
  
  .loading {
    width: 200%;
    background-image: linear-gradient(to right, #ffffff, #f3f3f3);
    animation: ${load} .5s infinite;
    height: 100%;
    vertical-align: middle;
  }

  @media (min-width: 480px) {
    width: calc(50% - (24px - 2px - 10px));
    
    &:not(:first-of-type) {
      margin-top: 10px;
    }
  }

  @media (min-width: 768px) {
    &:not(:first-of-type) {
      margin-top: 10px;
    }
    width: calc(33.3% - (24px - 2px - 10px));
  }
`;

export const Button = styled(CustomButton)`
  position: absolute;
  left: calc(50% - 60px);
  bottom: -55px;
`;
