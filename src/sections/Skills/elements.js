import styled from 'styled-components';

import CustomSection from '../../components/Section';
import CustomCard from '../../components/Card';
import listIcon from '../../assets/list-icon.svg';
import background from '../../assets/skills-bg.svg';

export const Section = styled(CustomSection)`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 60% 90%;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 24px;
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
  margin: 10px 5px 0 5px;
  min-width: 150px;
  width: calc(100% - 34px);
  padding: 24px;
  min-height: auto;

  h4 {
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    margin: 0;
    color: rgba(0,0,0,.85);
  }

  ul {
    list-style-image: url(${listIcon});
    padding-left: 20px;
    margin: 10px 0;
    li {
      font-weight: 300;
      font-size: 16px;
      line-height: 25px;
    }
  }

  @media (min-width: 480px) {
    width: calc(50% - (50px + 10px));
  }

  @media (min-width: 768px) {
    width: calc(33.3% - (50px + 10px));
  }
`;
