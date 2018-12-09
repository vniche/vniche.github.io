import React, { PureComponent } from 'react';
import withWindowDimensions from '../../hocs/withWindowDimensions';
import * as Styled from './elements';

class Header extends PureComponent {
  render() {
    return (
      <Styled.Wrapper {...this.props}>
        <Styled.Icon>
          <Styled.Logo />
        </Styled.Icon>
        <Styled.RightMenu>
          <Styled.Button primary>
            Get in touch
          </Styled.Button>
        </Styled.RightMenu>
      </Styled.Wrapper>
    );
  }
};

export default withWindowDimensions(Header);
