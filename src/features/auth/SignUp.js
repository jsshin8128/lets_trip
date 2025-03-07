// src/features/auth/SignUp.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';
import { signUpWithEmail, signUpWithGoogle } from '../../services/api';
import defaultProfileImage from '../../assets/images/default-profile.png';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    nickname: '',
  });
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 이메일 회원가입 API 호출
      await signUpWithEmail(form.email, form.password, form.nickname, profileImage);
      // 회원가입 후 로그인 페이지로 이동
      navigate('/auth/login');
    } catch (error) {
      console.error(error);
      alert('회원가입에 실패했습니다.');
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle();
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('구글 회원가입에 실패했습니다.');
    }
  };

  return (
    <div className="signup-container">
      <h1>회원가입</h1>
      <button onClick={handleGoogleSignUp} className="google-signup-button">
        구글 간편 회원가입
      </button>
      <div className="divider">or</div>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>이메일</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>닉네임</label>
          <input
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group profile-group">
          <label>프로필 이미지 (선택)</label>
          <div className="profile-upload">
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <div className="profile-thumbnail">
              <img
                src={previewImage || defaultProfileImage}
                alt="프로필 미리보기"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="signup-button">회원가입</button>
      </form>
      <div className="login-link">
        이미 계정이 있으신가요? <Link to="/auth/login">로그인 하기</Link>
      </div>
    </div>
  );
};

export default SignUp;
