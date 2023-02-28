import React, { Component } from "react";
// Callback함수 활용 ref
class RefRegister2 extends Component {
  state = {
    id: "",
    password: "",
    jumin1: "",
    jumin2: "",
    tel1: "",
    tel2: "",
    tel3: "",
  };

  onChange = (e) => {
    this.setState({
      //input객체의 username, message를 키처럼 사용하기 위해 대괄호
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, ":", e.target.value);
    console.log(this.state);
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        this.inputPw.focus();
      }
      if (e.target.name === "password") {
        this.inputJumin1.focus();
      }
      if (e.target.name === "jumin1") {
        this.inputJumin2.focus();
      }
      if (e.target.name === "jumin2") {
        this.inputTel1.focus();
      }
      if (e.target.name === "tel1") {
        this.inputTel2.focus();
      }
      if (e.target.name === "tel2") {
        this.inputTel3.focus();
      }
      if (e.target.name === "tel3") {
        this.inputButton.focus();
      }
    }
  };
  onClick = () => {
    alert(
      "아이디: " +
        this.state.id +
        "\n" +
        "비밀번호: " +
        this.state.password +
        "\n" +
        "주민번호: " +
        this.state.jumin1 +
        "-" +
        this.state.jumin2 +
        "\n" +
        "전화번호: " +
        this.state.tel1 +
        "-" +
        this.state.tel2 +
        "-" +
        this.state.tel3
    );
    this.setState({
      id: "",
      password: "",
      jumin1: "",
      jumin2: "",
      tel1: "",
      tel2: "",
      tel3: "",
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
                ref={(ref) => {
                  this.inputId = ref;
                }}
                type="text"
                name="id"
                placeholder="아이디"
                value={this.state.id}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                ref={(ref) => {
                  this.inputPw = ref;
                }}
                type="password"
                name="password"
                placeholder="비밀번호"
                value={this.state.password}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>주민번호</td>
            <td>
              <input
                ref={(ref) => {
                  this.inputJumin1 = ref;
                }}
                size="6"
                type="text"
                name="jumin1"
                placeholder="앞자리6자리"
                value={this.state.jumin1}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={(ref) => {
                  this.inputJumin2 = ref;
                }}
                size="7"
                type="text"
                name="jumin2"
                placeholder="뒷자리7자리"
                value={this.state.jumin2}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                ref={(ref) => {
                  this.inputTel1 = ref;
                }}
                size="3"
                type="text"
                name="tel1"
                placeholder="3자리"
                value={this.state.tel1}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={(ref) => {
                  this.inputTel2 = ref;
                }}
                size="4"
                type="text"
                name="tel2"
                placeholder="4자리"
                value={this.state.tel2}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={(ref) => {
                  this.inputTel3 = ref;
                }}
                size="4"
                type="text"
                name="tel3"
                placeholder="4자리"
                value={this.state.tel3}
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button
                onClick={this.onClick}
                ref={(ref) => {
                  this.inputButton = ref;
                }}
              >
                확인
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default RefRegister2;
