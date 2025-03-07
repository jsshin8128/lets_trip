// src/features/user/MyPage.js
import React from 'react';
import './MyPage.css';

function MyPage() {
  return (
    <div>
      <h1>마이페이지</h1>
      
      {/* 예시: 내가 개설한 모임 목록 */}
      <section>
        <h2>내가 개설한 모임</h2>
        <ul>
          <li>모임 제목 A</li>
          <li>모임 제목 B</li>
          {/* ... */}
        </ul>
      </section>

      {/* 예시: 내가 참가한 모임 목록 */}
      <section>
        <h2>내가 참가한 모임</h2>
        <ul>
          <li>모임 제목 C</li>
          <li>모임 제목 D</li>
          {/* ... */}
        </ul>
      </section>

      {/* 예시: 모임 삭제 or 참가 취소 로직 추가 가능 */}
    </div>
  );
}

export default MyPage;
