// src/features/meetings/Home.js
import React, { useState } from 'react';
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
    creator: {nickname: '강남건물주', profilePic: testProfile },
    participantRatio: 60,
    description: '서울의 명소와 맛집을 함께 즐기는 모임입니다.',
  },
  {
    id: 2,
    title: '부산 여행 모임',
    creator: { nickname: '강릉누렁이',profilePic: testProfile },
    participantRatio: 30,
    description: '부산 바다와 해산물을 함께 즐겨요!',
  },
  // ...etc
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="home-container">
      <h1>모임 목록</h1>

      {/* 검색/필터/정렬 영역 */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="🔍 검색어 입력"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="sort-options">
          <option value="latest">최신순</option>
          <option value="popular">인기순</option>
        </select>
        <button className="filter-button">필터</button>
      </div>

      {/* 모임 리스트 */}
      <div className="meeting-list">
        {dummyMeetings.map((meeting) => (
          <div className="meeting-card" key={meeting.id}>
            {/* 카드 헤더: 개설자, 원형 그래프 */}
            <div className="card-header">
              <div className="creator-info">
                <img
                  src={meeting.creator.profilePic}
                  alt={`${meeting.creator.nickname} 프로필`}
                  className="creator-profile"
                />
                <span className="creator-nickname">{meeting.creator.nickname}</span>
              </div>
              <div className="participant-ratio">
                <CircularProgress percentage={meeting.participantRatio} />
              </div>
            </div>

            {/* 카드 본문: 제목, 설명 */}
            <div className="card-body">
              <h2>{meeting.title}</h2>
              <p className="meeting-description">{meeting.description}</p>
            </div>

            {/* 카드 푸터: 상세보기 버튼 */}
            <div className="card-footer">
              <Link to={`/meetings/${meeting.id}`} className="detail-button">
                상세보기
              </Link>
            </div>
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
        backgroundColor: ['#36A2EB', '#E0E0E0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    rotation: -90,
    circumference: 360,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="circular-progress">
      <Doughnut data={data} options={options} />
      <div className="progress-text">{percentage}%</div>
    </div>
  );
};

export default Home;
