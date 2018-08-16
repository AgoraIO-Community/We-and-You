import React, { Component } from 'react';
import '../App.css';

class Volunteer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.sub = this.sub.bind(this);
  }

  sub(event) {
    console.log(this.state.name);
    console.log(this.state.age);
    console.log(this.state.email); // submit to firebase
    event.preventDefault(); // lead to tutorial
  }

  render() {
    return (
      <div className="Volunteer">
        <h1> Thank you for showing interest in volunteering! </h1>
        <form id="volDems" onSubmit={this.sub}>
          <input type="text" placeholder="Name" onChange={(e) => { this.state.name = e.target.value }} />
          <input type="text" placeholder="Age" onChange={(e) => { this.state.age = e.target.value }} />
          <input type="text" placeholder="Email" onChange={(e) => { this.state.email = e.target.value }} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default Volunteer;