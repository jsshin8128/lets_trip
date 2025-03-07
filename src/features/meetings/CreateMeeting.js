// src/features/meetings/CreateMeeting.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateMeeting.css';

// 유틸리티 컴포넌트
import DateRangePicker from '../../utils/DateRangePicker';

const CreateMeeting = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [maxParticipants, setMaxParticipants] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 모임 생성 API 호출 등 실제 로직 추가
    console.log('모임 생성:', { title, dates, time, maxParticipants, description });
    // 생성 후 모임 목록 페이지로 이동
    navigate('/meetings');
  };

  return (
    <div className="create-meeting-container">
      <h1>모임 개설하기</h1>
      <form onSubmit={handleSubmit} className="create-meeting-form">
        
        {/* 여행 제목 */}
        <div className="form-group">
          <label htmlFor="title">여행 제목 *</label>
          <input
            type="text"
            id="title"
            placeholder="제주도 3박4일 여행"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* 날짜 & 시간 (DateRangePicker 사용) */}
        <div className="form-group">
          <label>날짜 &amp; 시간 *</label>
          <DateRangePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>

        {/* 모집 인원 */}
        <div className="form-group">
          <label htmlFor="maxParticipants">모집 인원 *</label>
          <input
            type="number"
            id="maxParticipants"
            placeholder="5"
            value={maxParticipants}
            onChange={(e) => setMaxParticipants(e.target.value)}
            required
          />
        </div>

        {/* 간단한 설명 */}
        <div className="form-group">
          <label htmlFor="description">간단한 설명 *</label>
          <textarea
            id="description"
            placeholder="모임에 대한 간단한 설명을 입력하세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          모임 개설하기
        </button>
      </form>
    </div>
  );
};

export default CreateMeeting;
