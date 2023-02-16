import { useState } from "react"
function DropDown(props){
    const [drop , setDrop] = useState(false)
    return(
        <div  >
            <div className="text-left py-1 flex flex-row align-center cursor-pointer " onClick={()=>{
                setDrop(!drop)
            }} >
                <div className="px-2 flex items-center" >
                    {drop ? 
                    <svg className="w-3 h-3 fill-white -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    : 
                    <svg className="w-3 h-3 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                }
                </div>
                <div>{props.name}</div>
            </div >
                <div className="flex justify-center items-center flex-col " >
                    {drop ? <div className='rounded-xl w-[90vw] h-56 bg-white py-3 px-2' >
                        <div className="text-black  " >
                           {props.element}
                        </div>
                    </div> : null}
                </div>
        </div>
           
    )
}

export default DropDown;
