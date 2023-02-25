import { useState , useRef } from "react"
import { StepsHeader } from "./stepsHeader"
export function BrainDump(props) {
    const ref = useRef(null)
    let brainDumpList = props.brainDumpList
    let setBrainDumpList = props.setBrainDumpList
    const [userInput , setUserInput] = useState()
    const [count, setCount] = useState(0)
    const element = ref.current
    function addItem (e){
        e.preventDefault()
        setCount(count + 1)
        setBrainDumpList([...brainDumpList, {title: userInput, key: count, done: false}])
        setUserInput("")
        element.value = ""
    }
    return (    
        <div className="" >
            <StepsHeader step={1} />
            <div className="overflow-y-auto h-[75vh] p-4 m-2 " >{
                    brainDumpList.map((item)=>{
                        return(
                            <div key={item.key} className="flex flex-row justify-between" >
                                <div >{item.title}</div>
                            </div>
                        )
                    })
                }</div>
            <form className="w-full flex flex-row justify-between p-5 py-16 absolute bottom-0 right-0" >
                <input className="w-full h-[30px] rounded-lg text-black bg-white p-1 mr-1   " ref={ref} id="userInputElement" onChange={(e)=>{
                    setUserInput(e.target.value);   
                }} />
                <button className="mx-1 bg-[#00EF75] rounded-lg w-[30px] h-[30px] " onClick={(e)=>{addItem(e)}}>+</button>
            </form>
        </div>
    )
}