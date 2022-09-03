import titleImg from '../assets/login_title.png';
import logoImg from '../assets/login_logo.png';

interface Props {}

const Logo = (props: Props) => {
  return (
    <div className='flex flex-col items-center'>
      <img className='mb-5' src={titleImg} alt='title' width='300' />
      <img src={logoImg} alt='title' width='400' />
    </div>
  );
};

export default Logo;
