import React, { Component } from 'react';
import * as Styled from './elements';

export default class Banner extends Component {
  render() {
    return (
        <Styled.Section>
          <Styled.h2>Unleash Your Apps.</Styled.h2>
          <Styled.Devices />
        </Styled.Section>
    );
  }
};
