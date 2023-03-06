import React, { useReducer } from "react";

function reducer(state, action) {
  console.log("action: " + action);
  console.log("action.name: " + action.name);
  return {
    // state객체 안의 name만 변경하는 것이므로 객체 안에 사물을 만들어서 리턴시킴
    ...state,
    [action.name]: action.value,
  };
}

const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  // 비구조화 할당
  const { name, nickname } = state;
  const onChange = (e) => {
    console.log(e);
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default UseReducer1;
