import "./App.css";
import UserData from "./userdata";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };
    this.newState = this.newState.bind(this);
  }
  newState() {
    this.setState({ loading: true });
    setTimeout( async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),2500);
  }
  
  render() {
    return (
      <>
      <header>
        <nav className="navbar">
            <label htmlFor="logo">WebX</label>
            <ul className="navbar-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#userdetail">User Details</a></li>
            </ul>
        </nav>
      </header>

      <section id="home">
        <div id="background">
            <div className="overlay">
                <h2>unuseable</h2>
                <h1>One Page To Get All Users Details!</h1>
              
            </div>   
        </div>
    </section>
    <section id="userdetail">
        <div id="all-bgimg">
          <div id="head">
              <h3 id='head-h3'>Welcome to WebX</h3>
              <button onClick={this.newState}><b>Get Users Details</b></button>   
              <br/><br/>
              <div className="userdatacontainer">
                   <UserData loading={this.state.loading} users={this.state.users_data} />
              </div>

           </div>
          </div>
      </section>
      <footer>
        <div id="all-bgimg1">
            <div id="foot-p">
                <p>&copy;2021 All rights reserved by WebX Pvt Ltd.</p>
                <h5>Created by Piyush Parande</h5>
            </div>
        </div>
    </footer>
      </>
    );
  }
}
export default App;