// src/routes/index.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthRoutes from './authRoutes';       // 인증 관련 라우팅 (회원가입, 로그인)
import MeetingRoutes from './meetingRoutes';   // 모임 관련 라우팅 (홈, 모임 개설, 모임 상세)
import UserRoutes from './userRoutes';         // 사용자 관련 라우팅 (마이페이지, 프로필)

const MainRoutes = () => {
  return (
    <Routes>
      {/* 인증 관련 경로 */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* 모임 관련 경로 */}
      <Route path="/meetings/*" element={<MeetingRoutes />} />

      {/* 사용자 관련 경로 */}
      <Route path="/user/*" element={<UserRoutes />} />

      {/* 기본 경로로 접근 시 모임 관련 페이지로 리다이렉트 */}
      <Route path="/" element={<Navigate to="/meetings" />} />

      {/* 정의되지 않은 경로 처리 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
