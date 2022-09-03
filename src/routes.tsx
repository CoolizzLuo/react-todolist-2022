import { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <RequireAuth />,
        children: [
          {
            path: '/Home',
            element: <HomePage />,
          },
        ],
      },
      {
        path: '/Login',
        element: <LoginPage />,
      },
      {
        path: '/Register',
        element: <RegisterPage />,
      },
      {
        path: '/*',
        element: <h2>404 Not Found Page</h2>,
      },
    ],
  },
];

export default routes;
