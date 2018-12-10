import React, { PureComponent } from 'react';
import * as Styled from './elements';

export default class Card extends PureComponent {
  render() {
    const {
      className,
      children
    } = this.props;
    return (
      <Styled.Card className={className}>
        {children}
      </Styled.Card>
    );
  }
};
