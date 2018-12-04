import React, { PureComponent } from 'react';
import * as Styled from './elements'

import Button from '../Button'

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
          <Styled.Logo src={logo} />
        </Styled.Icon>
        <Styled.RightMenu>
          <Button primary style={{ margin: "16px" }}>
            Get in touch
          </Button>
        </Styled.RightMenu>
      </Styled.Header>
    );
  }
}
