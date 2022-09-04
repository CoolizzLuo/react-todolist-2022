import { Outlet } from 'react-router-dom';
import Header from './Header';
import emptyImg from '../assets/empty_logo.png';

const Layout = () => {
  return (
    <div className='h-[100vh] bg-home'>
      <Header />
      <div className='h-[calc(100vh-100px)] relative'>
        <img className='w-[240px] absolute md:top-[20%] top-[30%] right-0 left-0 mx-auto' src={emptyImg} alt='title' />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
