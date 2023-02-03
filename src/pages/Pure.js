import React from "react";

export default class Pure extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      data: 10,
    };
  }
  render() {
    return (
      <>
        <h1>Welcome to React.PureComponent value : {this.state.data}</h1>
        <button
          onChange={() => {
            this.setState({ data: 20 });
          }}
        >
          Update value to 20
        </button>
      </>
    );
  }
}
