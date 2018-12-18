import React, { PureComponent } from 'react';
import * as Styled from './elements';

export default class Button extends PureComponent {
  render() {
    return (
      <Styled.Button {...this.props} />
    );
  }
};
