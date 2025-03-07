// src/features/meetings/MeetingDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MeetingDetail.css';
import testProfile from '../../assets/images/testprofile.jpg';

const MeetingDetail = () => {
  const { meetingId } = useParams();

  // 임시 모임 상세 데이터 (실제 구현 시 API 호출 등으로 대체)
  const meeting = {
    id: meetingId,
    title: '제주도 3박4일 여행',
    dates: '2025-07-10 ~ 2025-07-13',
    time: '오전 10:00 ~ 오후 05:00',
    maxParticipants: 5,
    currentParticipants: 3,
    location: '제주도',
    creator: {
      nickname: '강남건물주',
      profilePic: testProfile,
    },
    description:
      '자세한 일정: 1일차 - 도착 및 휴식, 2일차 - 관광, 3일차 - 해변 활동, 4일차 - 출발. 주의사항 및 준비물 등 상세히 안내드립니다.',
    participants: [
      { id: 1, nickname: '참가자1', profilePic: testProfile },
      { id: 2, nickname: '참가자2', profilePic: testProfile },
      // 추가 참가자 데이터...
    ],
  };

  return (
    <div className="meeting-detail-container">
      <h1>{meeting.title}</h1>
      <div className="meeting-info">
        <p>
          <strong>날짜 & 시간:</strong> {meeting.dates} / {meeting.time}
        </p>
        <p>
          <strong>참가 인원:</strong> {meeting.currentParticipants} / {meeting.maxParticipants}
        </p>
        {meeting.location && <p><strong>장소:</strong> {meeting.location}</p>}
      </div>
      <div className="creator-info">
        <img
          src={meeting.creator.profilePic}
          alt={`${meeting.creator.nickname} 프로필`}
          className="creator-profile"
        />
        <span>{meeting.creator.nickname}</span>
      </div>
      <div className="meeting-description">
        <h2>상세 설명</h2>
        <p>{meeting.description}</p>
      </div>
      <div className="participants-list">
        <h2>참가자 리스트</h2>
        <div className="participants">
          {meeting.participants.map((participant) => (
            <div key={participant.id} className="participant">
              <img
                src={participant.profilePic}
                alt={`${participant.nickname} 프로필`}
                className="participant-profile"
              />
              <span>{participant.nickname}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="action-button">
        <button className="join-button">참가 신청</button>
      </div>
      <div className="back-link">
        <Link to="/meetings">모임 목록으로 돌아가기</Link>
      </div>
    </div>
  );
};

export default MeetingDetail;
