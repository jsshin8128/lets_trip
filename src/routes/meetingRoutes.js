import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../features/meetings/Home';

const MeetingRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      {/* 모임 개설, 상세 페이지 등 추가 예정 */}
    </Routes>
  );
};

export default MeetingRoutes;
