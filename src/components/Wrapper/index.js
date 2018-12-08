import React, { PureComponent } from 'react';
import withWindowDimensions from '../../hocs/withWindowDimensions';
import * as Styled from './elements';

class Section extends PureComponent {
  render() {
    return (
        <Styled.Wrapper {...this.props} />
    );
  }
};

export default withWindowDimensions(Section);
