// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 추후 구현할 각 기능별 라우트 파일을 임포트합니다.
import AuthRoutes from './routes/authRoutes';       // 회원가입, 로그인 등 인증 관련 페이지
import MeetingRoutes from './routes/meetingRoutes';   // 모임 목록, 모임 개설, 모임 상세 페이지
import UserRoutes from './routes/userRoutes';         // 마이페이지, 프로필 등 사용자 관련 페이지

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      {/* 공통 레이아웃: 헤더 & 내비게이션 */}
      <Header />
      <Navigation />
  
      <Routes>
        {/* 인증 관련 경로 */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* 모임 관련 경로 */}
        <Route path="/meetings/*" element={<MeetingRoutes />} />

        {/* 사용자 관련 경로 */}
        <Route path="/user/*" element={<UserRoutes />} />

        {/* 기본 경로: 필요에 따라 홈 페이지(모임 목록)를 기본으로 설정 */}
        <Route path="/" element={<MeetingRoutes />} />

        {/* 정의되지 않은 경로 처리 (404 Not Found) */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      {/* 공통 레이아웃: 푸터 */}
      <Footer />
    </div>
  );
}

export default App;
