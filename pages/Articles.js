import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div>
      <Outlet />
      <ul>
        <li>
          {/*NavLink 컴포넌트: 링크에서 사용하는 경로가 현재 라우터의 경로와 일치하는 경우 특정 스타일 또는
            css 클래스를 적용하는 컴포넌트. isActive를 파라미터로 전달받으며 boolean타입이다. 
          클릭 시 NavLink의 class는 액티브가 되고 파라미터는 true로 isActive를 전달받음 */}
          <NavLink
            to={"/articles/1"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/articles/1"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/articles/1"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
