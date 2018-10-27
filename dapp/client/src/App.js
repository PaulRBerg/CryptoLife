import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";

import "./App.css";
import "./css/main.css";

import Dashboard from './components/Dashboard';

class App extends Component {
  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3. Check console for details.`
      );
      console.log(error);
    }
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
