import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function ActionPage(props){
    let navigate = useNavigate()
    let session = props.session
    let setSession = props.setSession

    useEffect(()=>{
        if(session === undefined){
            navigate("/home")
        }
    },[])

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
        let allTaskDone = allTrue(session.map((item)=>{
            if (item.done === true){
                return true
            }
            return false
        }))


        if(allTaskDone){
            navigate("/home")
        }
    },[session])

    
    
    return(
        <div>
            {session?
                session.map((item)=>{
                    return(
                        <div key={item.key} className="flex flex-row " >
                            <input type="checkbox" className="bg-[#242424] mx-2" onChange={()=>{
                                setSession(session.map((i)=>{
                                    if (i === item){
                                        console.log(i, item, {...i})
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