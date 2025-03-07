// userRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyPage from '../features/user/MyPage';
import Profile from '../features/user/Profile';

const UserRoutes = () => {
  return (
    <Routes>
      {/* /user/mypage 로 접근할 때 MyPage 렌더링 */}
      <Route path="mypage" element={<MyPage />} />

      {/* /user/profile 로 접근할 때 Profile 렌더링 */}
      <Route path="profile" element={<Profile />} />

      {/* 그 외 /user/* */}
      <Route path="*" element={<MyPage />} />
    </Routes>
  );
};

export default UserRoutes;
