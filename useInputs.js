import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

// 함수를 외부에서 쓸 수 있도록 export
export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  // onChange: reduce함수를 활용하여 state 변경
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
