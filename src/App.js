import React, { Component } from "react";
import "./Dog.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dogs: []
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/21")
      .then(res => res.json())
      .then(data => {
        this.setState({
          Dogs: data.message
        });
      });
  }

  render() {
    const { Dogs } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}> Cute & Funny Pictures of Dogs</h1>
        {Dogs.map(dog => (
          <img
            className="container"
            style={{ width: 200, height: 200 }}
            src={dog}
            alt="pic"
          />
        ))}
        ;
      </div>
    );
  }
}

export default App;
