import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SessionContext } from "../SessionContext";
function StartMenu (){
    const {session, setSession} = useContext(SessionContext)
    const navigate = useNavigate();
    
    return(
        <div>
            <Header/>
            <button onClick={()=>{navigate("/sessionMaker")}} className="bg-[#00EF75] font-white font-bold rounded-lg px-5 py-2 text-xl" >start</button>
        </div>
    )


}


export default StartMenu;