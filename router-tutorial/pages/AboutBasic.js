import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation(); // location 객체를 반환
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      <p>쿼리스트링: {location.search}</p>
      <p>쿼리스트링: {location.pathname}</p>
    </div>
  );
};

export default About;
