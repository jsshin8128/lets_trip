// src/services/api.js

if (!process.env.REACT_APP_API_BASE_URL) {
    throw new Error('환경변수 REACT_APP_API_BASE_URL이 설정되지 않았습니다!'); 
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // 환경변수에 따라 기본 URL 설정

/**
 * 이메일 회원가입 함수
 * 프로필 이미지가 있는 경우 FormData를 이용해 전송합니다.
 */
export async function signUpWithEmail(email, password, nickname, profileImage) {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('nickname', nickname);
  if (profileImage) {
    formData.append('profileImage', profileImage);
  }

  const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '회원가입에 실패했습니다.');
  }
  return response.json();
}

/**
 * 구글 간편 회원가입 함수
 * 백엔드에서 OAuth 플로우를 처리하도록 리다이렉트합니다.
 */
export async function signUpWithGoogle() {
  window.location.href = `${API_BASE_URL}/api/auth/signup/google`;
}

/**
 * 이메일 로그인 함수
 */
export async function loginWithEmail(email, password) {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '로그인에 실패했습니다.');
  }
  return response.json();
}

/**
 * 구글 로그인 함수
 * 백엔드에서 OAuth 플로우를 처리하도록 리다이렉트합니다.
 */
export async function loginWithGoogle() {
  window.location.href = `${API_BASE_URL}/api/auth/login/google`;
}
