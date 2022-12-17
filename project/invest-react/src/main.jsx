import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Investiments from './pages/Investiments';
import Report from './pages/Report';
import Login from './pages/Login';
import Signup from './pages/Signup';
import App from './App';
import ProtectedRoute from './components/ProtectedRoute';
import { InvestimentProvider } from './contexts/InvestimentContext';
import { UserAuthContextProvider } from './contexts/UserAuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'investiments',
        element: (
          <ProtectedRoute>
            <Investiments />
          </ProtectedRoute>
        ),
      },
      {
        path: 'report',
        element: (
          <ProtectedRoute>
            <Report />
          </ProtectedRoute>
        ),
      },
      {
        path: '/',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <InvestimentProvider>
        <RouterProvider router={router} />
      </InvestimentProvider>
    </UserAuthContextProvider>
  </React.StrictMode>
);
