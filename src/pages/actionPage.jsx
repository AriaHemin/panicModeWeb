import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { SessionContext } from "../SessionContext";

export default function ActionPage(props){
    let navigate = useNavigate()
    const {session, setSession} = useContext(SessionContext)

    function allTrue(array){
        let allTrue;
        array.map((item)=>{
            if(item === true){
                allTrue = true
            }else if(item === false){
                allTrue = false
            }else if(array.indexOf(item) === array.length - 1){
                if(item === true){
                    allTrue = true
                }else if(item === false){
                    allTrue = false
                }
            }

        })
        return allTrue 
    }

    useEffect(()=>{
        console.log(session)
        if(session.length === 0 || session === undefined){
            console.log(session)
            window.localStorage.setItem('session', JSON.stringify([]));
            navigate("/done")
        }else{
           
            let allTaskDone = allTrue(session.map((item)=>{
                if (item.done === true){
                    return true
                }
                return false
            }))
            
            if(allTaskDone){
                window.localStorage.setItem('session', JSON.stringify([]));
                setSession([])
                navigate("/done")
                
            }else{
                
                window.localStorage.setItem('session', JSON.stringify(session));
            }
        }


    },[session])

    
    
    return(
        <div>
            {session?
                session.map((item)=>{
                    return(
                        <div key={item.key} className="flex flex-row " >
                            <input type="checkbox" checked={item.done} className="bg-[#242424] mx-2" onChange={()=>{
                                setSession(session.map((i)=>{
                                    if (i === item){
                                        return {...i, done: !item.done}
                                    }
                                    return i
                                }))
                            }}/>
                            <div>{item.title}</div>
                        </div>
                    )
                })
            : null}
        </div>
        
    )

}