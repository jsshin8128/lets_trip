// src/routes/authRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from '../features/auth/SignUp';
import Login from '../features/auth/Login';

const AuthRoutes = () => {
  return (
    <Routes>
      {/* 회원가입 페이지 */}
      <Route path="signup" element={<SignUp />} />
      {/* 로그인 페이지 */}
      <Route path="login" element={<Login />} />
      {/* 아이디/비밀번호 찾기 페이지 (추후 구현) */}
      <Route path="find-id" element={<div>아이디 찾기 페이지 (미구현)</div>} />
      <Route path="find-password" element={<div>비밀번호 찾기 페이지 (미구현)</div>} />
      
      {/* 그 외 경로는 로그인 페이지로 리다이렉트 */}
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
};

export default AuthRoutes;
