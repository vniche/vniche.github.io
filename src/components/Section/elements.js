import styled from 'styled-components';
import { sizes } from '../../constants';

export const Wrapper = styled.div`
  max-width: ${sizes.mobile}px;
  padding: 0  ${props => (props.windowWidth > sizes.mobile) ? ((props.windowWidth - sizes.mobile) / 2) + "px" : "16px"};
  position: relative;
`;
