import { useState , useRef } from "react"
import { StepsHeader } from "./stepsHeader"

export function BrainDump(props) {
    const ref = useRef(null)
    let brainDumpList = props.brainDumpList
    let setBrainDumpList = props.setBrainDumpList
    const [userInput , setUserInput] = useState()
    const [count, setCount] = useState(0)
    
    const element = ref.current
   
    function addItem (){
        setCount(count + 1)
        setBrainDumpList([...brainDumpList, {title: userInput, key: count}])
        setUserInput("")
        element.value = ""
    }
    return (
        
        
        <div className="" >
            <StepsHeader step={1} />
            <div className="overflow-y-auto h-96 p-4 m-2 " >{
                    brainDumpList.map((item)=>{
                        return(
                            <div key={item.key} className="flex flex-row justify-between" >
                                <p>{item.title}</p>
                                
                            </div>
                        )
                    })
                }</div>
            <div className="flex flex-row justify-between border p-2" >
                <input className="w-full  p-1 mr-5 " ref={ref} id="userInputElement" onChange={(e)=>{
                    setUserInput(e.target.value);
                      
                }} />
                <button className="mx-1" onClick={addItem}>add</button>
            </div>
        </div>
    )

}