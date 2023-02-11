import './App.css'
import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ActionPage from './pages/actionPage';
import Done  from './pages/donePage';
/*import SplashPage from './pages/splashPage';
import StartMenu from './pages/startMenu'
*/
import SessionMaker from './pages/sessionMaker';
import { SessionContext } from './SessionContext';
import IntialLoading from './components/intialLoading';

function App() {
  const [session , setSession] = useState([])
  const [loading , setLoading] = useState(true)
  
  /*
  {
    path: "/",
    element:  <IntialLoading/>
  },
  { 
    path: "/home",
    element: <StartMenu  />
  },
  
  */
  const router = createBrowserRouter([
    {
      path: "/sessionMaker",
      element: <SessionMaker  />
    },{
      path: "/",
      element: <IntialLoading loading={loading} setLoading={setLoading}  />
    },{
      path: "/actionTime",
      element: <ActionPage />
    },{
      path: "/done",
      element: <Done/>
    }
  ]);
  
  return (
    <div className="App">
      {/*
      */}
      <SessionContext.Provider value={{session, setSession}} >
        <RouterProvider router={router} />
      </SessionContext.Provider>
    </div>
  )
}

export default App
