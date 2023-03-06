import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout2 = () => {
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout2;
