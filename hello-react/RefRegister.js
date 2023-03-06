import React, { Component } from "react";
// createRef 활용
class RefRegister extends Component {
  state = {
    id: "",
    password: "",
    email: "",
    tel: "",
  };

  idRef = React.createRef();
  passwordRef = React.createRef();
  emailRef = React.createRef();
  telRef = React.createRef();

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
        this.state.tel
    );
    this.setState({
      id: "",
      password: "",
      email: "",
      tel: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        this.passwordRef.current.focus();
      }
      if (e.target.name === "password") {
        this.emailRef.current.focus();
      }
      if (e.target.name === "email") {
        this.telRef.current.focus();
      }
      if (e.target.name === "tel") {
        this.handleClick();
      }
      //   switch (e.target.name) {
      //     case "id":
      //       this.passwordRef.current.focus();
      //       break;
      //     case "password":
      //       this.emailRef.current.focus();
      //       break;
      //     case "email":
      //       this.telRef.current.focus();
      //       break;
      //     case "tel":
      //       this.handleClick();
      //       break;

      //     default:
      //       break;
      //   }
    }
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
                ref={this.idRef}
                type="text"
                name="id"
                placeholder="아이디"
                value={this.state.id}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                ref={this.passwordRef}
                type="password"
                name="password"
                placeholder="비밀번호"
                value={this.state.password}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input
                ref={this.emailRef}
                type="text"
                name="email"
                placeholder="이메일"
                value={this.state.email}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                ref={this.telRef}
                type="text"
                name="tel"
                placeholder="전화번호"
                value={this.state.tel}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyPress}
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

export default RefRegister;
