// src/routes/userRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyPage from '../features/user/MyPage';
import Profile from '../features/user/Profile';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="mypage" element={<MyPage />} />
      <Route path="profile" element={<Profile />} />
      {/* 그 외는 일단 마이페이지로 가게 하는 등 원하는 로직 가능 */}
      <Route path="*" element={<MyPage />} />
    </Routes>
  );
};

export default UserRoutes;
