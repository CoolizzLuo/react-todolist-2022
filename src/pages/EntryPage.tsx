import { useLocation } from 'react-router-dom';
import titleImg from '../assets/login_title.png';
import logoImg from '../assets/login_logo.png';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const EntryPage = () => {
  const location = useLocation();

  return (
    <div className='bg-[#FFD370] h-[100vh] flex justify-center items-center'>
      <div className='flex items-center md:space-x-24'>
        <div className='hidden md:flex flex-col items-center '>
          <img className='mb-5' src={titleImg} alt='title' width='300' />
          <img src={logoImg} alt='title' width='400' />
        </div>
        {location.pathname === '/login' && <LoginForm />}
        {location.pathname === '/register' && <RegisterForm />}
      </div>
    </div>
  );
};

export default EntryPage;
