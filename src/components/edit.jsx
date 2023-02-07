import { useEffect, useState } from "react"
import { StepsHeader } from "./stepsHeader";

export function Edit (props){
    let brainDumpList = props.brainDumpList
    let setBrainDumpList = props.setBrainDumpList
    function swapElements(arr, i1, i2) {
        // Step 1
        let temp = arr[i1];
      
        // Step 2
        arr[i1] = arr[i2];
      
        // Step 3
        arr[i2] = temp;

        return arr
    }
    const [count, setCount] = useState(0)
    const [lol, setLol] = useState()
    useEffect(()=>{
        setLol(brainDumpList.map((item)=>{
            return(
                <div key={item.key} className="flex items-center justify-between my-2 border p-2  " >
                    <div className="flex flex-row items-center" >
                        <div className="flex flex-col " >
                            <div onClick={()=>{moveUp(item)}} >⇧</div>
                            <div onClick={()=>{moveDown(item)}} >⇩</div>
                        </div>
                        <div className="mx-4" >{item.title}</div>
                    </div>
                    <div onClick={()=>{
                        let index = brainDumpList.indexOf(item)
                        brainDumpList.splice(index, 1)
                        setBrainDumpList(brainDumpList)
                        setCount(count + 1)
                    }} className="mx-2" >x</div>
                </div>
            )
        }))
        
    },[count])
    
    function moveUp(item){
        let index = brainDumpList.indexOf(item)
        if(index > 0){
            setBrainDumpList(swapElements(brainDumpList, index , index - 1))
            setCount(count + 1)
        }
    }
    
    function moveDown(item){
        let index = brainDumpList.indexOf(item)
        if(index < brainDumpList.length - 1){
            setBrainDumpList(swapElements(brainDumpList, index , index + 1))
            setCount(count + 1) 
            
        }
        
    }
    
    
    return(
        <div className="" >
            <StepsHeader step={2} />
            {
                lol
            }
        </div>
    )

}