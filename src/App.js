import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './sections/Banner';
import Skills from './sections/Skills';
import Articles from './sections/Articles';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Skills />
        <Articles />
        <Footer />
      </div>
    );
  }
};

export default App;
