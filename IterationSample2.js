import React from "react";

const IterationSample2 = () => {
  // const names = ["눈사람", "얼음", "눈", "바람"];
  // const nameList = names.map((name) => <li>{name}</li>);
  // return <ul>{nameList}</ul>;

  // key 활용
  const names = ["눈사람", "얼음", "눈", "바람"];
  const namesList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{namesList}</ul>;
};

export default IterationSample2;
