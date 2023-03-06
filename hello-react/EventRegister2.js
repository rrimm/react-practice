import React, { useState } from "react";

const EventRegister2 = () => {
  const [form, setForm] = useState({
    id: "",
    password: "",
    email: "",
    tel: "",
  });

  const { id, password, email, tel } = form; // 비구조화 할당

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(
      "아이디: " +
        id +
        "\n" +
        "비밀번호: " +
        password +
        "\n" +
        "이메일: " +
        email +
        "\n" +
        "전화번호: " +
        tel
    );
    setForm({
      id: "",
      password: "",
      email: "",
      tel: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
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
              type="text"
              name="id"
              placeholder="아이디"
              value={id}
              onChange={onChange}
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
              value={password}
              onChange={onChange}
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
              value={email}
              onChange={onChange}
            />
          </td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>
            <input
              type="text"
              name="tel"
              placeholder="전화번호"
              value={tel}
              onChange={onChange}
              onKeyDown={onKeyPress}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2" align="center">
            <button onClick={onClick}>확인</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default EventRegister2;
