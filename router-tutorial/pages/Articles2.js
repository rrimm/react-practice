import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      {/* 이 컴포넌트는 Route의 children으로 들어가는 JSX를 보여주는 역할을 한다. 
      하위요소를 이 위치에 나타내고자 할 때 Outlet 활용 */}
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
