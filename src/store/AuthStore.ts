import React, { createContext, useState } from 'react';

export type SignInInput = {
  email: string;
  password: string;
};

export type User = {
  email: string;
  nickname: string;
};

export type Auth = {
  token: string;
  user: User;
};

interface AuthContextType {
  auth: Auth;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
  checkUser: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

// const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User>(null!);

//   const signIn = (input: SignInInput) => {
//     setUser(newUser);
//     callback();
//   };

//   const signOut = (callback: VoidFunction) => {
//     setUser(null);
//     callback();
//   };
// };
