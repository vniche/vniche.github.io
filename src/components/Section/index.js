import React, { PureComponent } from 'react';

import Wrapper from '../Wrapper';

class Section extends PureComponent {
  render() {
    const {
      className,
      children
    } = this.props;
    return (
      <section className={className}>
        <Wrapper>
          {children}
        </Wrapper>
      </section>
    );
  }
};

export default Section;
