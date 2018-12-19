import React, { Component } from 'react';
import Modal from './components/Modal';
import GetInTouchForm from './components/GetInTouchForm';
import Header from './components/Header';
import Banner from './sections/Banner';
import Skills from './sections/Skills';
import Articles from './sections/Articles';
import Footer from './components/Footer';

class App extends Component {
  state = {
    showModal: false
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  openModal = () => {
    this.setState({
      showModal: true
    });
  };

  render() {
    const {
      showModal
    } = this.state;
    return (
      <div className="App">
        <Modal hidden={!showModal} handleClose={this.closeModal}>
          <GetInTouchForm />
        </Modal>
        <Header handleOpen={this.openModal} />
        <Banner />
        <Skills />
        <Articles handleOpen={this.openModal}  />
        <Footer />
      </div>
    );
  }
};

export default App;
