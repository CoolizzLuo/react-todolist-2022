import React from 'react';
import titleImg from '../assets/login_title.png';
import { useAuthStore } from '../store/authStore';

const HomePage = () => {
  const { clearAuthState } = useAuthStore();
  return (
    <>
      <header>
        <img className=' mt-6' src={titleImg} alt='title' width='300' />
        <div>
          <div>王小明</div>
          <button onClick={() => clearAuthState()}>登出</button>
        </div>
      </header>
      <main></main>
    </>
  );
};

export default HomePage;
