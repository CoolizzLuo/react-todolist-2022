import { RouteObject } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import HomePage from './pages/HomePage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RequireAuth />,
  },
  {
    path: '/'
  },
];
