import "./App.css";
import "./index.css";
import Client from "./MyComponents/details";
import Logo from "../src/api.png"
import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
      this.state = { clients_data: [], loading: false };
      this.displayUser = this.displayUser.bind(this);
  }

  displayUser() {
    this.setState({ loading: true });
    document.getElementById("block").style.display = "none";
      
    setTimeout(async function () {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
      this.setState({ clients_data: jsonresponse["data"], loading: false });
  }.bind(this),4200);}

  render() {
    return (

      <div>
      <nav className="navbar ml-auto">
        <div className="container">
            
          <h3 className="Heading">How to Fetch Data using API</h3>
            <button onClick={this.displayUser}>Fetch Users </button>
        </div>
      </nav>
        <Client loading={this.state.loading} clients={this.state.clients_data} />
          <div id="block">
          <img src={Logo} alt="" /> &nbsp;
          <div>Just click on &nbsp;<span id="fetch">"Fetch Users" </span> to fetch.&nbsp;&nbsp;<img src="https://media.giphy.com/media/TiroX8dZ1RSVvciB6D/giphy.gif" alt="No" />
              </div>
          </div>
      </div>
    );
  }
}

export default App;