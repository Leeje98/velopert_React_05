import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            style={({ isActive }) => ({ color: isActive ? "black" : "white" })}
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            className={({ isActive }) =>   // 스타일이 아니라 CSS 클래스를 적용하고 싶으면 activeStyle 대신 activeClassName 을 사용
              "nav-link" + (isActive ? "activated" : "")
            }
          >
            gildong
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/*" element={<div>유저를 선택해주세요</div>} />
        <Route path=":username" element={<Profile />} />
        {/* <WithRouterSample /> */}
      </Routes>
    </div>
  );
};

export default Profiles;
