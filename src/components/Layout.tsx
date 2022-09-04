import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className='h-[100vh] bg-home'>
      <Header />
      <div className='h-[calc(100vh-100px)]'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
