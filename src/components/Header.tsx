import titleImg from '../assets/login_title.png';
import { useAuthStore } from '../store/authStore';

const Header = () => {
  const { authState, clearAuthState } = useAuthStore();

  return (
    <header className='w-full h-[100px] flex justify-between items-start px-12 py-6'>
      <img src={titleImg} alt='title' width='300' />
      <div className='flex space-x-4'>
        <span className='font-bold'>{`${authState?.nickname} 的代辦`}</span>
        <button onClick={() => clearAuthState()}>登出</button>
      </div>
    </header>
  );
};

export default Header;
