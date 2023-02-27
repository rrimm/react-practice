import React, { useState } from "react";

// 컴포넌트 생성을 화살표 함수로
const Say = () => {
  // useState 리턴값: 배열 구조. [상태값, 상태값을 변화시키는 함수]
  // useState(""): 상태의 초기값
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

//선언적 함수
// Function Say() {
//     // useState 리턴값: 배열 구조. [상태값, 상태값을 변화시키는 함수]
//     const [message, setMessage] = useState("");
//     const onClickEnter = () => setMessage("안녕하세요!");
//     const onClickLeave = () => setMessage("안녕히 가세요!");

//     return (
//       <div>
//         <button onClick={onClickEnter}>입장</button>
//         <button onClick={onClickLeave}>퇴장</button>
//         <h1>{message}</h1>
//       </div>
//     );
//   };
export default Say;
