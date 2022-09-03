import { Outlet } from 'react-router-dom';
import Popup from './Popup';

const Layout = () => {
  return (
    <div className='bg-[#FFD370] h-[100vh] flex justify-center items-center'>
      <Popup />
      <Outlet />
    </div>
  );
};

export default Layout;
