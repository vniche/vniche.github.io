import React, { PureComponent } from 'react';
import * as Styled from './elements'

import logo from '../../assets/logo.svg'

export default class Header extends PureComponent {
  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }

  triggerResizeEvent() {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }

  render() {
    return (
      <Styled.Header>
        <Styled.Icon>
          <img src={logo} />
        </Styled.Icon>
      </Styled.Header>
    );
  }
}
