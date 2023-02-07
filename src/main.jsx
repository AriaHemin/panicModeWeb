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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
