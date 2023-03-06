import React, { Component } from "react";

class EventRegister1 extends Component {
  state = {
    id: "",
    password: "",
    email: "",
    phone: "",
  };

  handleChange = (e) => {
    this.setState({
      //input객체의 username, message를 키처럼 사용하기 위해 대괄호
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(
      "아이디: " +
        this.state.id +
        "\n" +
        "비밀번호: " +
        this.state.password +
        "\n" +
        "이메일: " +
        this.state.email +
        "\n" +
        "전화번호: " +
        this.state.phone
    );
    this.setState({
      id: "",
      password: "",
      email: "",
      phone: "",
    });
  };

  render() {
    return (
      <div>
        <center>
          <h1>회원 가입</h1>
        </center>

        <table border="1" align="center">
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                name="id"
                placeholder="아이디"
                value={this.state.id}
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input
                type="text"
                name="email"
                placeholder="이메일"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                type="text"
                name="phone"
                placeholder="전화번호"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button onClick={this.handleClick}>확인</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default EventRegister1;
