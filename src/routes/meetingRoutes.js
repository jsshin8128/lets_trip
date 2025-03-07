// src/routes/meetingRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../features/meetings/Home';
import MeetingDetail from '../features/meetings/MeetingDetail';
import CreateMeeting from '../features/meetings/CreateMeeting';

const MeetingRoutes = () => {
  return (
    <Routes>
      {/* /meetings -> 모임 목록(Home) */}
      <Route path="/" element={<Home />} />

      {/* /meetings/:id -> 모임 상세 페이지 */}
      <Route path=":meetingId" element={<MeetingDetail />} />

      {/* /meetings/create -> 모임 개설 페이지 */}
      <Route path="create" element={<CreateMeeting />} />
    </Routes>
  );
};

export default MeetingRoutes;
