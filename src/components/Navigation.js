// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="app-navigation">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/auth/login">로그인</Link>
        </li>
        <li>
          <Link to="/auth/signup">회원가입</Link>
        </li>
        <li>
          <Link to="/user/mypage">마이페이지</Link>
        </li>
        {/* 필요하면 프로필 페이지, 모임 개설 페이지 등 추가 */}
        {/* <li><Link to="/meetings/create">모임 개설</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navigation;
