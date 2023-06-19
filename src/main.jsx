import router from '@Home/router';
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import './css/style.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
