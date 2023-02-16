import { useState } from "react"
import DropDown from "./dropDown"
import { StepsHeader } from "./stepsHeader"

export function SessionSetting (){
    const [settingSections , setSettingSections] = useState([
        {
            name: "timer",
            element : <div>hello</div>,
            key: 1
        },{
            name: "reward",
            element : <div>hello</div>,
            key: 2
        },{
            name: "punishment",
            element : <div>hello</div>,
            key: 3
        }
    ])
    return(
        <div className="" >
            <StepsHeader step={3}/>
            <div className="text-2xl font-bold" >work in progress</div>
            <div className="overflow-y-auto  h-[75vh] " >
                {
                    settingSections.map((settingSection)=>{
                        return(
                            <DropDown key={settingSection.key} name={settingSection.name} element={settingSection.element} />
                        )
                    })
                }
                
            </div>
        </div>
    )
}