import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormSection, FormTitle, InputField, InputLabel, Input, ButtonField, Button, ErrorHint } from './FormSection';
import { useAuthStore } from '../store/authStore';
import useError from '../hooks/useError';
import { authApiUtil } from '../api/authApiUtil';
import { convertBoolean2Number } from '../utils';

const validationSchema = yup
  .object({
    email: yup
      .string()
      .matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/, 'Email 格式不正確')
      .required('此欄位不可為空'),
    password: yup.string().required('此欄位不可為空'),
  })
  .required();

type UserSubmitForm = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuthState } = useAuthStore();
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
      const res = await authApiUtil.signIn(data);

      setAuthState({
        email: res.data.email,
        nickname: res.data.nickname,
        token: res.headers.authorization,
      });

      navigate('/home');
    } catch (error: any) {
      reset({
        password: '',
      });
      handleError(error);
    }
  };

  return (
    <FormSection onSubmit={handleSubmit(onSubmit)}>
      <FormTitle title='最實用的線上代辦事項服務' />
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
      <ButtonField>
        <Button type='submit' active>
          登入
        </Button>
        <Button onClick={() => navigate('/register')}>註冊帳號</Button>
      </ButtonField>
    </FormSection>
  );
};

export default LoginForm;
