import React, { Component } from "react";
import Hoc from "./HOC";

class HOC_CALL extends Component {
  render() {
    return (
      <div>
        <h2>HOC Example</h2>
        JavaTpoint provides best CS tutorials.
      </div>
    );
  }
}
HOC_CALL = Hoc(HOC_CALL);
export default HOC_CALL;
