import React, { Component } from "react";
// state 없이 콜백함수 활용 ref 동작 구조
class RefRegister3 extends Component {
  onChange = (e) => {
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
        this.inputId.value +
        "\n" +
        "비밀번호: " +
        this.inputPw.value +
        "\n" +
        "주민번호: " +
        this.inputJumin1.value +
        "-" +
        this.inputJumin2.value +
        "\n" +
        "전화번호: " +
        this.inputTel1.value +
        "-" +
        this.inputTel2.value +
        "-" +
        this.inputTel3.value
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
                ref={(ref) => {
                  this.inputId = ref;
                }}
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
                ref={(ref) => {
                  this.inputPw = ref;
                }}
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
                ref={(ref) => {
                  this.inputJumin1 = ref;
                }}
                size="6"
                type="text"
                name="jumin1"
                placeholder="앞자리6자리"
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

export default RefRegister3;
