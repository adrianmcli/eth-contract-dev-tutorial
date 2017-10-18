import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Web3Provider } from 'react-web3';

class InnerComponent extends Component {
  componentDidMount() {
    console.log('HEY')
    console.log(window.web3)
    setTimeout(() => {
      console.log(window.web3)
    },2000)
    
  }

  async callContract() {
    var to = '0x2ea05cba41ec00ab582083e63bd63a32f6dd5406';
    window.web3.eth.receiveEthers.call({to, data: {value: 5}}, (result) => {
      console.log(result)
    })
    
  }

  render() {
    var address = window.web3.eth.accounts

    var to = '0x2ea05cba41ec00ab582083e63bd63a32f6dd5406';
    // function callContract(){
    //   config.web3.eth.call({ to: to, data:'value: 5'});
    // }

    return (<div>{address}
    
    <button type="button" onClick={this.callContract}> Gimme money</button>
    </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Web3Provider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <InnerComponent />
      </div>
      </Web3Provider>
    );
  }
}

export default App;
