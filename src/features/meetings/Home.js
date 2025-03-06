// src/features/meetings/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Home.css';
// 이미지 import
import testProfile from '../../assets/images/testprofile.jpg'; 

ChartJS.register(ArcElement, Tooltip, Legend);

// 임시 모임 데이터
const dummyMeetings = [
  {
    id: 1,
    title: '서울 여행 모임',
    creator: {
      nickname: '강남건물주',
      profilePic: testProfile, 
    },
    participantRatio: 60, // 모집 인원 비율 (60%)
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>모임 목록</h1>
      <div className="meeting-list">
        {dummyMeetings.map((meeting) => (
          <div key={meeting.id} className="meeting-card">
            <h2>{meeting.title}</h2>
            <div className="meeting-info">
              {/* 개설자 정보 */}
              <div className="creator-info">
                <img
                  src={meeting.creator.profilePic}
                  alt={`${meeting.creator.nickname} 프로필`}
                  className="creator-profile"
                />
                <span>{meeting.creator.nickname}</span>
              </div>
              {/* 모집 인원 비율 원형 그래프 */}
              <div className="participant-ratio">
                <CircularProgress percentage={meeting.participantRatio} />
              </div>
            </div>
            {/* 모임 상세 페이지로 이동하는 버튼 */}
            <Link to={`/meetings/${meeting.id}`} className="detail-button">
              상세보기
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// 원형 그래프 컴포넌트
const CircularProgress = ({ percentage }) => {
    const data = {
      datasets: [
        {
          data: [percentage, 100 - percentage],
          backgroundColor: ['#36A2EB', '#E0E0E0'], // 진행률 색상 및 배경색
          borderWidth: 0,
        },
      ],
    };
  
    const options = {
      cutout: '70%',         // 도넛 내부 비율
      rotation: -90,         // 시작 각도
      circumference: 360,    // 전체 원(360°)
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    };
  
    return (
      <div className="circular-progress" style={{ position: 'relative', width: '100px', height: '100px' }}>
        <Doughnut data={data} options={options} />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          {percentage}%
        </div>
      </div>
    );
  };

export default Home;
