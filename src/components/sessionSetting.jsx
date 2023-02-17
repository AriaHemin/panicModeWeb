
import { StepsHeader } from "./stepsHeader"

export function SessionSetting (props){
    let brainDumpList = props.brainDumpList
    return(
        <div className="" >
            <StepsHeader step={3}/>
            <div className="overflow-y-auto h-[75vh] py-5 my-5 " >
                <div className="text-2xl font-bold">here is a list of tasks to do! are your ready?</div>
                {brainDumpList.map((item)=>{
                        return(
                            <div key={item.key} className="">{item.title}</div>
                        )
                    })}

               
            </div>
        </div>
    )
}