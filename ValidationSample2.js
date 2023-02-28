import React, { Component } from "react";
import "./ValidationSample.css";
// createRef를 통한 ref 설정
class ValidationSample2 extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  input = React.createRef();

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    // input위치로 focus
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={this.input}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            // 조건연산자 활용
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample2;
