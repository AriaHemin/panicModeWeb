import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SplashPage from './pages/splashPage';
import SessionMaker from './pages/sessionMaker';
import { ActionPage } from './pages/actionPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashPage/>,
  },{
    path: "/home",
    element: <App />
  },
  {
    path: "/sessionMaker",
    element: <SessionMaker/>
  },
  {
    path: "/actionTime",
    element: <ActionPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
