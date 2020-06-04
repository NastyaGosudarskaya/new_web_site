import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/HeaderComponent';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Header />
            <Main />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
