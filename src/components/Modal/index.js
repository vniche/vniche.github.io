import React, { PureComponent } from 'react';
import * as Styled from './elements';

class Modal extends PureComponent {
  render() {
    const {
      children,
      className,
      handleClose,
      hidden
    } = this.props;
    return (
      <div>
        {!hidden &&
          <Styled.Overlay onClick={handleClose} />
        }
        <Styled.Card className={className} hidden={hidden}>
          {children}
          <Styled.Button onClick={handleClose}>
            <Styled.Close />
          </Styled.Button>
        </Styled.Card>
      </div>
    );
  }
};

export default Modal;
