import { useEffect, useState } from "react"
import { useStepper } from "../hooks/useStepper"
import { PanicModeStep1 } from "../components/panicModeStep1"
import { PanicModeStep2 } from "../components/panicModestep2"
import { PanicModeStep3 } from "../components/panicModeStep3"

function SessionMaker() {
	const [brainDumpList, setBrainDumpList] = useState([]);
	const { currentStep ,step, goNextStep , goPreviousStep , steps} = useStepper([
        <PanicModeStep1 brainDumpList={brainDumpList} setBrainDumpList={setBrainDumpList} />,
        <PanicModeStep2  brainDumpList={brainDumpList} setBrainDumpList={setBrainDumpList} />,
        <PanicModeStep3  brainDumpList={brainDumpList} setBrainDumpList={setBrainDumpList} />
    ])


  	return (
    <div className="fixed inset-0 w-screen h-screen ">
      <div className="p-5" >
                {step}
            </div>
            <div className="p-5 absolute bottom-0 right-0 " >
                <div className="inline mx-2 " >{currentStep + 1}/{steps.length}</div>
                <button className="bg-gray-200 text-black rounded px-5 py-2 mx-1" onClick={goPreviousStep} >back</button>
                <button className="bg-gray-200 text-black rounded px-5 py-2 mx-1" onClick={goNextStep} >next</button>
            </div>
    </div>
  )
}

export default SessionMaker;