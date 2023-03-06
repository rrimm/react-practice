import { useRef } from "react";
// useRef
const UseRefRegister = () => {
  const inputId = useRef("");
  const inputPw = useRef("");
  const inputJumin1 = useRef("");
  const inputJumin2 = useRef("");
  const inputTel1 = useRef("");
  const inputTel2 = useRef("");
  const inputTel3 = useRef("");
  const inputButton = useRef("");

  const onChange = (e) => {
    console.log(e.target.name, ":", e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        inputPw.current.focus();
      }
      if (e.target.name === "password") {
        inputJumin1.current.focus();
      }
      if (e.target.name === "jumin1") {
        inputJumin2.current.focus();
      }
      if (e.target.name === "jumin2") {
        inputTel1.current.focus();
      }
      if (e.target.name === "tel1") {
        inputTel2.current.focus();
      }
      if (e.target.name === "tel2") {
        inputTel3.current.focus();
      }
      if (e.target.name === "tel3") {
        inputButton.current.focus();
      }
    }
  };
  const onClick = () => {
    alert(
      "아이디: " +
        inputId.current.value +
        "\n" +
        "비밀번호: " +
        inputPw.current.value +
        "\n" +
        "주민번호: " +
        inputJumin1.current.value +
        "-" +
        inputJumin2.current.value +
        "\n" +
        "전화번호: " +
        inputTel1.current.value +
        "-" +
        inputTel2.current.value +
        "-" +
        inputTel3.current.value
    );

    inputId.current.value = "";
    inputPw.current.value = "";
    inputJumin1.current.value = "";
    inputJumin2.current.value = "";
    inputTel1.current.value = "";
    inputTel2.current.value = "";
    inputTel3.current.value = "";
  };

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
              ref={inputId}
              type="text"
              name="id"
              placeholder="아이디"
              onChange={onChange}
              onKeyDown={handleKeyPress}
            />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input
              ref={inputPw}
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={onChange}
              onKeyDown={handleKeyPress}
            />
          </td>
        </tr>
        <tr>
          <td>주민번호</td>
          <td>
            <input
              ref={inputJumin1}
              size="6"
              type="text"
              name="jumin1"
              placeholder="앞자리6자리"
              onChange={onChange}
              onKeyDown={handleKeyPress}
            />
            -
            <input
              ref={inputJumin2}
              size="7"
              type="text"
              name="jumin2"
              placeholder="뒷자리7자리"
              onChange={onChange}
              onKeyDown={handleKeyPress}
            />
          </td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>
            <input
              ref={inputTel1}
              size="3"
              type="text"
              name="tel1"
              placeholder="3자리"
              onChange={onChange}
              onKeyDown={handleKeyPress}
            />
            -
            <input
              ref={inputTel2}
              size="4"
              type="text"
              name="tel2"
              placeholder="4자리"
              onChange={onChange}
              onKeyDown={handleKeyPress}
            />
            -
            <input
              ref={inputTel3}
              size="4"
              type="text"
              name="tel3"
              placeholder="4자리"
              onChange={onChange}
              onKeyDown={handleKeyPress}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2" align="center">
            <button onClick={onClick} ref={inputButton}>
              확인
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default UseRefRegister;
