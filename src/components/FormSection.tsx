import React from 'react';

interface FormSectionProps {
  onSubmit?: () => void;
  className?: string;
  children: React.ReactNode;
}

const FormSection = ({ onSubmit, className = 'flex flex-col md:space-y-2', children }: FormSectionProps) => (
  <form onSubmit={onSubmit} className={className}>
    {children}
  </form>
);

interface FormTitleProps {
  title: string;
  className?: string;
}

const FormTitle = ({
  title,
  className = 'text-2xl md:text-left text-center font-bold pt-4 md:pt-20 pb-6',
}: FormTitleProps) => <h2 className={className}>{title}</h2>;

interface InputFieldProps {
  children: React.ReactNode;
  className?: string;
}

const InputField = ({ children, className = 'relative pb-6' }: InputFieldProps) => (
  <div className={className}>{children}</div>
);

interface InputLabelProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const InputLabel = ({ label, children, className = 'flex flex-col space-y-1 md:space-y-2' }: InputLabelProps) => (
  <label className={className}>
    <span className='font-bold'>{label}</span>
    {children}
  </label>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: number;
}

const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => (
  <input
    className={`px-4 py-3 rounded-base w-[304px] outline-none shadow-base border-2 ${
      props.error ? 'border-[#D87355]' : 'border-white'
    }`}
    ref={ref}
    {...props}
  />
));

interface ButtonFieldProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonField = ({ children, className = 'flex flex-col items-center py-2' }: ButtonFieldProps) => (
  <div className={className}>{children}</div>
);

interface ButtonProps {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  type = 'button',
  active = false,
  onClick,
  className = 'w-[128px] h-[35px] md:h-[47px] rounded-base mb-3 font-bold hover:text-white hover:bg-[#333] ',
}: ButtonProps) => {
  const classProps = active ? className + 'text-white bg-[#333]' : className;

  return (
    <button className={classProps} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

interface ErrorHintProps {
  active?: any;
  children: string | undefined;
  className?: string;
}

const ErrorHint = ({ active = false, children }: ErrorHintProps) => (
  <p className={`text-[#D87355] font-bold absolute bottom-[-3px] right-1 md:left-1 ${active ? '' : 'hidden'}`}>
    {children}
  </p>
);

export type {
  FormSectionProps,
  FormTitleProps,
  InputFieldProps,
  InputLabelProps,
  ButtonFieldProps,
  ButtonProps,
  ErrorHintProps,
};
export { FormSection, FormTitle, InputField, InputLabel, ButtonField, Button, ErrorHint, Input };
