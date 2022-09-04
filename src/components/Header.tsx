import titleImg from '../assets/login_title.png';
import { useAuthStore } from '../store/authStore';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const { authState, clearAuthState } = useAuthStore();

  return (
    <header className='w-full h-[100px] flex justify-between sm:items-start items-center sm:px-12 px-8 py-6'>
      <img className='w-[240px]' src={titleImg} alt='title' />
      <div className='flex space-x-4'>
        <span className='hidden sm:inline font-bold'>{`${authState?.nickname} 的待辦`}</span>
        <button onClick={() => clearAuthState()}>登出</button>
      </div>
    </header>
  );
};

export default Header;
