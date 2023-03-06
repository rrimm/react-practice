// import React, { Component } from "react";
import React, { useState } from "react";

const EventPractice = () => {
  // state에 문자열이 아닌 객체를 넣는 경우
  // 객체 형태의 속성을 기억하는 form, 변경에 활용되는 setForm
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  // 객체가 가진 값을 비구조화 할당
  const { username, message } = form;

  // spread연산자 활용하여 원객체 form 복제한 nextForm, nextForm에 변경된 값이 저장되고, 이 객체를 setForm에서 수정
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    // 초기화
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
