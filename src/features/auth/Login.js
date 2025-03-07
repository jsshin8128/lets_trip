// src/features/auth/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { loginWithEmail, loginWithGoogle } from '../../services/api';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 이메일 로그인 API 호출
      await loginWithEmail(form.email, form.password);
      // 로그인 성공 시 홈 또는 원하는 페이지로 이동
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('로그인에 실패했습니다.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('구글 로그인에 실패했습니다.');
    }
  };

  return (
    <div className="login-page">
      {/* 중앙에 위치한 로그인 카드 */}
      <div className="login-card">
        <h1>로그인</h1>
        <hr className="separator" />

        <button onClick={handleGoogleLogin} className="google-login-button">
          구글 계정으로 로그인
        </button>

        <div className="or-divider">
          <span>or</span>
        </div>
        <hr className="separator" />

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>이메일 *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>비밀번호 *</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="login-button">로그인</button>
        </form>

        <hr className="separator" />

        <div className="login-links">
          <Link to="/auth/find-id" className="link">아이디 찾기</Link>
          <Link to="/auth/find-password" className="link">비밀번호 찾기</Link>
        </div>
        <div className="signup-link">
          계정이 없으신가요? <Link to="/auth/signup">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
