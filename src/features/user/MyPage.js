import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import testProfile from '../../assets/images/testprofile.jpg';
import './MyPage.css';

function MyPage() {
  const [activeTab, setActiveTab] = useState('created'); // 'created' or 'joined'

  // 더미 데이터: 내가 개설한 모임 목록
  const createdMeetings = [
    { id: 1, title: '제주도 3박4일 여행', date: '2025-07-10 ~ 2025-07-13', participants: '3/5' },
    { id: 2, title: '부산 해운대 여행', date: '2025-08-01 ~ 2025-08-03', participants: '5/5' },
  ];

  // 더미 데이터: 내가 참가한 모임 목록
  const joinedMeetings = [
    { id: 3, title: '서울 도심 투어', date: '2025-07-15 ~ 2025-07-16', participants: '2/5' },
    { id: 4, title: '강원도 스키 여행', date: '2025-09-10 ~ 2025-09-12', participants: '4/5' },
  ];

  const handleDelete = (id) => {
    // 삭제 버튼 클릭 시 모달(여기서는 window.confirm) 처리
    if (window.confirm('정말 삭제하시겠습니까?')) {
      alert(`모임 ${id}를(을) 삭제합니다.`);
      // 삭제 로직(API 호출 등) 추가
    }
  };

  const handleCancel = (id) => {
    // 참가 취소 버튼 클릭 시 처리
    if (window.confirm('정말 참가 취소하시겠습니까?')) {
      alert(`모임 ${id}의 참가를 취소합니다.`);
      // 참가 취소 로직(API 호출 등) 추가
    }
  };

  const renderMeetingCard = (meeting) => (
    <div key={meeting.id} className="meeting-card">
      <div className="meeting-info">
        <h3>{meeting.title}</h3>
        <p>{meeting.date}</p>
        <p>참여: {meeting.participants}</p>
      </div>
      <div className="meeting-action">
        {activeTab === 'created' ? (
          <button onClick={() => handleDelete(meeting.id)} className="danger-button">
            삭제
          </button>
        ) : (
          <button onClick={() => handleCancel(meeting.id)} className="danger-button">
            참가 취소
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="my-page-container">
      {/* 프로필 카드 - 클릭하면 프로필 상세 페이지로 이동 */}
      <Link to="/user/profile" className="profile-link">
        <div className="profile-header">
        <img src={testProfile} alt="프로필" className="profile-avatar" />
          <div className="profile-info">
            <h2>강남건물주</h2>
            <p>등급: 일반</p>
          </div>
        </div>
      </Link>

      {/* 탭 영역 */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'created' ? 'active' : ''}`}
          onClick={() => setActiveTab('created')}
        >
          내가 개설한 모임
        </button>
        <button
          className={`tab ${activeTab === 'joined' ? 'active' : ''}`}
          onClick={() => setActiveTab('joined')}
        >
          내가 참가한 모임
        </button>
      </div>

      {/* 모임 카드 목록 */}
      <div className="meeting-list">
        {activeTab === 'created'
          ? createdMeetings.map(renderMeetingCard)
          : joinedMeetings.map(renderMeetingCard)}
      </div>
    </div>
  );
}

export default MyPage;
