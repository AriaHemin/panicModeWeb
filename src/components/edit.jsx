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
                <div key={item.key} className="flex items-center justify-between my-2  p-2  " >
                    <div className="flex flex-row items-center " >
                        <div className="flex flex-col " >
                            <div className="cursor-pointer" onClick={()=>{moveUp(item)}} >
                                <svg className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                            </div>
                            <div className="cursor-pointer" onClick={()=>{moveDown(item)}} >
                                <svg className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                            </div>
                        </div>
                        <div className="mx-4 text-xl" >{item.title}</div>
                    </div>
                    <div onClick={()=>{
                        let index = brainDumpList.indexOf(item)
                        brainDumpList.splice(index, 1)
                        setBrainDumpList(brainDumpList)
                        setCount(count + 1)
                    }} className="mx-2 cursor-pointer">
                        <svg className="fill-white w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                    </div>
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
        <div  >
            <StepsHeader step={2} />
            <div className="h-[80vh] overflow-y-auto my-2">
                {lol}
            </div>
        </div>
    )
}