import React, { PureComponent } from 'react';
import * as Styled from './elements'

export default class Button extends PureComponent {
  render() {
    const {
      primary,
      className,
      children
    } = this.props;
    return (
      <Styled.Button primary={primary} className={className}>
        {children}
      </Styled.Button >
    );
  }
}
