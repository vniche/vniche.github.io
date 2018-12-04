import React, { PureComponent } from 'react';
import * as Styled from './elements'

export default class Button extends PureComponent {
  render() {
    const {
      primary,
      style,
      children
    } = this.props;
    return (
      <Styled.Button primary={primary} style={style}>
        {children}
      </Styled.Button >
    );
  }
}
