import React, { PureComponent } from 'react';
import withWindowDimensions from '../../hocs/withWindowDimensions';
import * as Styled from './elements';

class Modal extends PureComponent {
  render() {
    const {
      handleClose
    } = this.props;
    return (
      <Styled.Card {...this.props}>
        <Styled.Button onClick={handleClose}>
          <Styled.Close />
        </Styled.Button>
      </Styled.Card>
    );
  }
};

export default withWindowDimensions(Modal);
