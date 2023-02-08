import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from 'react';
import SplashPage from './pages/splashPage';
import SessionMaker from './pages/sessionMaker';
import ActionPage from './pages/actionPage';
import StartMenu from './pages/startMenu'


function App() {

  const [session , setSession] = useState()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SplashPage session={session} />,
    },{
      path: "/home",
      element: <StartMenu/>
    },
    {
      path: "/sessionMaker",
      element: <SessionMaker setSession={setSession} session={session} />
    },
    {
      path: "/actionTime",
      element: <ActionPage session={session} />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  )
}

export default App
