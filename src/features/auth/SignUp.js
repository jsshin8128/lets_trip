// src/features/auth/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { signUpWithEmail, signUpWithGoogle } from '../../services/api';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  });
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
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
          <label>비밀번호 확인</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
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
        <div className="form-group">
          <label>프로필 이미지</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <button type="submit" className="signup-button">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
