import { StepsHeader } from "./stepsHeader"

export function SessionSetting (props){
    let brainDumpList = props.brainDumpList
    let setBrainDumpList = props.setBrainDumpList
    return(
        <div className="" >
            <StepsHeader step={3}/>
            {
                brainDumpList.map((item)=>{
                    return(
                        <div key={item.key} className="flex flex-row" >
                            <div className="mx-1" ><input type="checkbox" /></div>
                            <div className="mx-1"><p>{item.title}</p></div>
                        </div>
                    )
                })
            
            }
        </div>
    )

}