import React, { PureComponent } from 'react';
import withWindowDimensions from '../../hocs/withWindowDimensions';
import * as Styled from './elements';

import heart from '../../assets/heart.svg';

class Footer extends PureComponent {
  render() {
    const {
      logo
    } = this.props;
    return (
      <Styled.Footer {...this.props}>
        Made with
        <Styled.Heart src={heart} alt="heart" />
        by<Styled.Logo src={logo} alt="logo" />
      </Styled.Footer >
    );
  }
};

export default withWindowDimensions(Footer);
