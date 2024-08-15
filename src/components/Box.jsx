import React, { Component } from "react";

class Box extends Component {
  render() {
    const { title, item, result } = this.props;

    return (
      <div className={`box ${result}`}>
        <h1>{title}</h1>
        <img
          className="itemImg"
          src={item && item.img}
          alt={item && item.name}
        />
        <h2>{result}</h2>
      </div>
    );
  }
}

export default Box;
