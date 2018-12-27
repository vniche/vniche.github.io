import React, { Component } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';
import Modal from './components/Modal';
import GetInTouchForm from './components/GetInTouchForm';
import Header from './components/Header';
import Banner from './sections/Banner';
import Skills from './sections/Skills';
import Articles from './sections/Articles';
import Footer from './components/Footer';

class App extends Component {
  targetRef = React.createRef();
  targetElement = null;

  state = {
    showModal: false
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
    enableBodyScroll(this.targetElement);
  };

  openModal = () => {
    this.setState({
      showModal: true
    });
    disableBodyScroll(this.targetElement);
  };

  async componentDidMount() {
    this.targetElement = this.targetRef.current;;
  }

  async componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    const {
      showModal
    } = this.state;
    return (
      <div className="App">
        {showModal &&
          <Modal hidden={!showModal} handleClose={this.closeModal}>
            <GetInTouchForm handleClose={this.closeModal} />
          </Modal>
        }
        <Header handleOpen={this.openModal} />
        <Banner />
        <Skills />
        <Articles handleOpen={this.openModal} />
        <Footer />
      </div>
    );
  }
};

export default App;
