import { useEffect, useState } from "react"
import { useStepper } from "../hooks/useStepper"
import { BrainDump } from "../components/brainDump"
import { Edit } from "../components/edit"
import { SessionSetting } from "../components/sessionSetting"

function SessionMaker() {
	const [brainDumpList, setBrainDumpList] = useState([]);
    const [step1 , setStep1] = useState()
	const { currentStep ,step, goNextStep , goPreviousStep , steps} = useStepper([
        <BrainDump  brainDumpList={brainDumpList} setBrainDumpList={setBrainDumpList} />,
        <Edit  brainDumpList={brainDumpList} setBrainDumpList={setBrainDumpList} />,
        <SessionSetting  brainDumpList={brainDumpList} setBrainDumpList={setBrainDumpList} />
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