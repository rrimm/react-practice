import React, { Component } from "react";
// createRef 활용(state 없이)
class RefRegister4 extends Component {
  inputId = React.createRef();
  inputPw = React.createRef();
  inputJumin1 = React.createRef();
  inputJumin2 = React.createRef();
  inputTel1 = React.createRef();
  inputTel2 = React.createRef();
  inputTel3 = React.createRef();
  inputButton = React.createRef();

  onChange = (e) => {
    console.log(e.target.name, ":", e.target.value);
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        this.inputPw.current.focus();
      }
      if (e.target.name === "password") {
        this.inputJumin1.current.focus();
      }
      if (e.target.name === "jumin1") {
        this.inputJumin2.current.focus();
      }
      if (e.target.name === "jumin2") {
        this.inputTel1.current.focus();
      }
      if (e.target.name === "tel1") {
        this.inputTel2.current.focus();
      }
      if (e.target.name === "tel2") {
        this.inputTel3.current.focus();
      }
      if (e.target.name === "tel3") {
        this.inputButton.current.focus();
      }
    }
  };
  onClick = () => {
    alert(
      "아이디: " +
        this.inputId.current.value +
        "\n" +
        "비밀번호: " +
        this.inputPw.current.value +
        "\n" +
        "주민번호: " +
        this.inputJumin1.current.value +
        "-" +
        this.inputJumin2.current.value +
        "\n" +
        "전화번호: " +
        this.inputTel1.current.value +
        "-" +
        this.inputTel2.current.value +
        "-" +
        this.inputTel3.current.value
    );

    this.inputId.value = "";
    this.inputPw.value = "";
    this.inputJumin1.value = "";
    this.inputJumin2.value = "";
    this.inputTel1.value = "";
    this.inputTel2.value = "";
    this.inputTel3.value = "";
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
                ref={this.inputId}
                type="text"
                name="id"
                placeholder="아이디"
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                ref={this.inputPw}
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>주민번호</td>
            <td>
              <input
                ref={this.inputJumin1}
                size="6"
                type="text"
                name="jumin1"
                placeholder="앞자리6자리"
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={this.inputJumin2}
                size="7"
                type="text"
                name="jumin2"
                placeholder="뒷자리7자리"
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                ref={this.inputTel1}
                size="3"
                type="text"
                name="tel1"
                placeholder="3자리"
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={this.inputTel2}
                size="4"
                type="text"
                name="tel2"
                placeholder="4자리"
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
              -
              <input
                ref={this.inputTel3}
                size="4"
                type="text"
                name="tel3"
                placeholder="4자리"
                onChange={this.onChange}
                onKeyDown={this.handleKeyPress}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button onClick={this.onClick} ref={this.inputButton}>
                확인
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default RefRegister4;
