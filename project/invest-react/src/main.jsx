import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Investiments from './pages/Investiments';
import Report from './pages/Report';
import App from './App';
import { InvestimentProvider } from './contexts/InvestimentContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Investiments />,
      },
      {
        path: 'report',
        element: <Report />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InvestimentProvider>
      <RouterProvider router={router} />
    </InvestimentProvider>
  </React.StrictMode>
);
