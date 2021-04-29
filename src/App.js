import React, { Component } from "react";
import Main from "./components/Main";
import Topic from "./components/Topic";
import New from "./components/New";

class App extends Component {
  state = {
    comp: "main",
  };

  launchNew = (screen) => {
    this.setState({
      comp: screen,
    });
  };

  renderScreen = (screen) => {
    switch (screen) {
      case "main":
        return <Main launchNew={this.launchNew} />;
      case "new":
        return <New launchNew={this.launchNew} />;
      default:
        return null;
    }
  };

  render() {
    return <div>{this.renderScreen(this.state.comp)}</div>;
  }
}

export default App;
