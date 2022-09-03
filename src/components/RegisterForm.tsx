import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormSection, FormTitle, InputField, InputLabel, Input, ButtonField, Button, ErrorHint } from './FormSection';
import useError from '../hooks/useError';
import { authApiUtil } from '../api/authApiUtil';
import { convertBoolean2Number } from '../utils';
import titleImg from '../assets/login_title.png';

const validationSchema = yup
  .object({
    email: yup
      .string()
      .matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/, 'Email 格式不正確')
      .required('此欄位不可為空'),
    nickname: yup.string().required('此欄位不可為空'),
    password: yup.string().min(6, '至少需要 6 位數').required('此欄位不可為空'),
    confirmPassword: yup
      .string()
      .min(6, '至少需要 6 位數')
      .oneOf([yup.ref('password'), null], '密碼輸入不一致')
      .required('此欄位不可為空'),
  })
  .required();

type UserSubmitForm = {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const { handleError } = useError();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: UserSubmitForm) => {
    try {
      const { confirmPassword, ...req } = data;
      await authApiUtil.register(req);

      navigate('/login');
    } catch (error: any) {
      reset({
        password: '',
        confirmPassword: '',
      });
      handleError(error);
    }
  };

  return (
    <FormSection onSubmit={handleSubmit(onSubmit)}>
      <img className='md:hidden  mt-6' src={titleImg} alt='title' width='300' />
      <FormTitle title='註冊帳號' />
      <InputField>
        <InputLabel label='Email'>
          <Input
            type='text'
            placeholder='請輸入Email'
            error={convertBoolean2Number(errors.email)}
            {...register('email')}
          />
        </InputLabel>
        <ErrorHint active={!!errors.email}>{errors.email?.message}</ErrorHint>
      </InputField>
      <InputField>
        <InputLabel label='你的暱稱'>
          <Input
            type='text'
            placeholder='請輸入你的暱稱'
            error={convertBoolean2Number(errors.nickname)}
            {...register('nickname')}
          />
        </InputLabel>
        <ErrorHint active={!!errors.nickname}>{errors.nickname?.message}</ErrorHint>
      </InputField>
      <InputField>
        <InputLabel label='密碼'>
          <Input
            type='password'
            placeholder='請輸入密碼'
            error={convertBoolean2Number(errors.password)}
            {...register('password')}
          />
        </InputLabel>
        <ErrorHint active={!!errors.password}>{errors.password?.message}</ErrorHint>
      </InputField>
      <InputField>
        <InputLabel label='再次輸入密碼'>
          <Input
            type='password'
            placeholder='請再次輸入密碼'
            error={convertBoolean2Number(errors.confirmPassword)}
            {...register('confirmPassword')}
          />
        </InputLabel>
        <ErrorHint active={!!errors.confirmPassword}>{errors.confirmPassword?.message}</ErrorHint>
      </InputField>
      <ButtonField>
        <Button type='submit' active>
          註冊帳號
        </Button>
        <Button onClick={() => navigate('/login')}>登入</Button>
      </ButtonField>
    </FormSection>
  );
};

export default RegisterForm;
