// src/features/user/Profile.js
import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 프로필 업데이트 API 호출
    alert('프로필 정보가 업데이트되었습니다.');
  };

  return (
    <div>
      <h1>프로필 관리</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>닉네임</label>
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="새 닉네임 입력"
          />
        </div>
        <div>
          <label>프로필 이미지</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">저장하기</button>
      </form>

      {/* 미리보기 (선택) */}
      {profileImage && (
        <div>
          <h2>미리보기</h2>
          <img
            src={URL.createObjectURL(profileImage)}
            alt="프로필 미리보기"
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  );
}

export default Profile;
