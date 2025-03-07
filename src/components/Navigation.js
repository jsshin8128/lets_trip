// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="app-navigation">
      <div className="nav-left">
        <Link className="logo" to="/">떠나자:KHU</Link>
        <ul className="nav-menu">
          <li><Link to="/">홈</Link></li>
          <li><Link to="/meetings/create">모임개설</Link></li>
          <li><Link to="/user/mypage">마이페이지</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        <ul className="nav-auth">
          <li><Link to="/auth/login">로그인</Link></li>
          <li><Link to="/auth/signup">회원가입</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
