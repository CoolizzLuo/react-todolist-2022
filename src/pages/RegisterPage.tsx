import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import {
  FormSection,
  FormTitle,
  InputField,
  InputLabel,
  ButtonField,
  Button,
  ErrorHint,
} from '../components/FormSection';

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center space-x-24'>
      <Logo />
      <FormSection>
        <FormTitle title='註冊帳號' />
        <InputField>
          <InputLabel label='Email'>
            <input className='px-4 py-3 rounded-[10px] w-[304px] outline-none' type='text' placeholder='請輸入 Email' />
          </InputLabel>
          <ErrorHint>此欄位不可為空</ErrorHint>
        </InputField>
        <InputField>
          <InputLabel label='你的暱稱'>
            <input
              className='px-4 py-3 rounded-[10px] w-[304px] outline-none'
              type='text'
              placeholder='請輸入你的暱稱'
            />
          </InputLabel>
          <ErrorHint>此欄位不可為空</ErrorHint>
        </InputField>
        <InputField>
          <InputLabel label='密碼'>
            <input
              className='px-4 py-3 rounded-[10px] w-[304px] outline-none'
              type='password'
              placeholder='請輸入密碼'
            />
          </InputLabel>
          <ErrorHint>此欄位不可為空</ErrorHint>
        </InputField>
        <InputField>
          <InputLabel label='再次輸入密碼'>
            <input
              className='px-4 py-3 rounded-[10px] w-[304px] outline-none'
              type='password'
              placeholder='請再次輸入密碼'
            />
          </InputLabel>
          <ErrorHint>此欄位不可為空</ErrorHint>
        </InputField>
        <ButtonField>
          <Button type='submit' active>
            註冊帳號
          </Button>
          <Button onClick={() => navigate('/login')}>登入</Button>
        </ButtonField>
      </FormSection>
    </div>
  );
};

export default RegisterPage;
