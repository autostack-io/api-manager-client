import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Overview from "./views/Overview";

export default class App extends React.Component {
  state = {
    services: null,
  }

  componentDidMount() {
    axios.get("api/services").then((res) => {
      this.setState({
        services: res.data,
      });
    }, (err) => {
      console.log(err);
    });
  }

  render() {
    const { services } = this.state;

    return (
      <Router>
        <div>
          <Route path="/" exact render={() => <Overview services={services} />} />
          <Route path="/service/:id" component={Overview} />
        </div>
      </Router>
    );
  }
}