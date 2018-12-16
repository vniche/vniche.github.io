import React, { PureComponent } from 'react';
import * as Styled from './elements';

export default class Card extends PureComponent {
  render() {
    return (
      <Styled.Card {...this.props} />
    );
  }
};
