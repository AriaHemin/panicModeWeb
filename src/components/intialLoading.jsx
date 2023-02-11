import { useEffect, useContext } from "react";
import { SessionContext } from "../SessionContext";
import ActionPage from "../pages/actionPage";
import StartMenu from "../pages/startMenu";
import LoadingAnimation from "./loadingAnimation";
function IntialLoading(props){
    let loading = props.loading
    let setLoading = props.setLoading
    const {session, setSession} = useContext(SessionContext)
    const items = JSON.parse(window.localStorage.getItem('session'));
    useEffect(()=>{
        items === undefined ? setSession([]) : setSession(items)
        console.log(session, items)
      },[])
    return(
        <>  
            <LoadingAnimation loading={loading} setLoading={setLoading} />
           <div>
            {
                session.length !== 0 || session !== null ? (<ActionPage/>):(<StartMenu/>)
            }
           </div>
        </>
    )
}
export default IntialLoading;