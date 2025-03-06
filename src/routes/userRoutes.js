import React from 'react';
import { Routes, Route } from 'react-router-dom';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<div>User Page (임시)</div>} />
      {/* 마이페이지, 프로필 페이지 추가 예정 */}
    </Routes>
  );
};

export default UserRoutes;
