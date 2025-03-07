import React, { useState } from 'react';
import testProfile from '../../assets/images/testprofile.jpg';
import './Profile.css';

function Profile() {
  const [nickname, setNickname] = useState('기존 닉네임');
  // 새로 업로드한 파일
  const [uploadedImage, setUploadedImage] = useState(null);

  // 닉네임 변경
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  // 파일 업로드 시 업로드된 파일을 상태에 저장
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
    }
  };

  // 폼 전송 시
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('프로필 정보가 업데이트되었습니다.');
    // TODO: 서버에 닉네임, 프로필 이미지 저장 로직
  };


  // 표시할 이미지 결정 (새로 업로드한 파일이 있으면 미리보기, 없으면 testProfile)
  const displayedImage = uploadedImage
    ? URL.createObjectURL(uploadedImage)
    : testProfile;

    return (
      <div className="profile-container">
        <div className="profile-card">
          {/* 카드 헤더 영역 */}
          <div className="profile-card-header">
            <h2>프로필 관리</h2>
          </div>
  
          {/* 카드 본문 영역 */}
          <div className="profile-card-body">
            <div className="profile-avatar-section">
              <img
                src={displayedImage}
                alt="프로필 미리보기"
                className="profile-avatar-large"
              />
              <label htmlFor="imageUpload" className="upload-button">
                이미지 업로드
              </label>
              <input
                type="file"
                accept="image/*"
                id="imageUpload"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <small className="upload-hint">
                (jpg, png 등 / 5MB 이하 권장)
              </small>
            </div>
  
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <label htmlFor="nicknameInput">닉네임</label>
                <input
                  id="nicknameInput"
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  placeholder="새 닉네임 입력"
                />
              </div>
  
              <button type="submit" className="primary-button">
                정보 수정하기
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default Profile;
