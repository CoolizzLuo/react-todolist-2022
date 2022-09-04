import { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import EntryPage from './pages/EntryPage';
import HomePage from './pages/HomePage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RequireAuth />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
        ],
      },
    ],
  },
  {
    path: 'Login',
    element: <EntryPage />,
  },
  {
    path: 'Register',
    element: <EntryPage />,
  },
  {
    path: '*',
    element: <h2>404 Not Found Page</h2>,
  },
];

export default routes;
