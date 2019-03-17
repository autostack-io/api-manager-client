import React from "react";

import Services from "./service/Services";

export default class Overview extends React.Component {

  render() {
    const { services } = this.props;

    return (
      <div>
        <h1>Overview</h1>
          <h2>Services</h2>
          <Services services={services}/>
      </div>
    );
  }
}
