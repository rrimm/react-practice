import React, { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) {
    return 0;
  }
  //a:누척 변수, b: 현재값 변수
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length; // 평균 반환
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map(
          (
            value,
            index //  값을 목록으로 출력
          ) => (
            <li key={index}>{value}</li>
          )
        )}
      </ul>
      <div>
        <b>평균값:</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
