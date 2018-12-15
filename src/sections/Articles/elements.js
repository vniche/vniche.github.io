import styled from 'styled-components';

import CustomSection from '../../components/Section';
import CustomCard from '../../components/Card';

export const Section = styled(CustomSection)`
  min-height: 500px;
  position: relative;
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  padding-bottom: 50px;
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
