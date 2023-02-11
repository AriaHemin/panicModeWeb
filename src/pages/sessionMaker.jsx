import { useState, useContext } from "react"
import { useStepper } from "../hooks/useStepper"
import { BrainDump } from "../components/brainDump"
import { Edit } from "../components/edit"
import { SessionSetting } from "../components/sessionSetting"
import { useNavigate } from "react-router-dom"
import { SessionContext } from "../SessionContext";

function SessionMaker(props) {
    const navigate = useNavigate()
	const [brainDumpList, setBrainDumpList] = useState([]);
    const {session, setSession} = useContext(SessionContext)
	const { currentStep ,step, goNextStep , goPreviousStep , steps} = useStepper([
        <BrainDump  brainDumpList={brainDumpList} setBrainDumpList={setBrainDumpList} />,
        <Edit  brainDumpList={brainDumpList} setBrainDumpList={setBrainDumpList} />,
        <SessionSetting  brainDumpList={brainDumpList} setBrainDumpList={setBrainDumpList} />
    ])

    function renderSwitch(step){
        switch(step) {
            case 1:
                return (
                    <>
                        <div className="p-5 absolute bottom-0 right-0 " >
                            <button className="bg-[#00EF75] text-white  text-md h-[33px] text-xl font-bold rounded px-5 mx-1" onClick={goNextStep} >next</button>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="p-5 absolute bottom-0 right-0 " >
                            <button className="bg-black  text-white rounded px-5 h-[33px]  text-xl font-bold mx-1" onClick={goPreviousStep} >back</button>
                            <button className="bg-[#00EF75] text-white rounded px-5 h-[33px] text-xl font-bold mx-1" onClick={goNextStep} >next</button>
                        </div>
                    </>
                );
            case 3:
            return (
                <>
                    <div className="p-5 absolute bottom-0 right-0 ">
                            <button className="bg-black text-white rounded px-5 h-[33px] text-xl font-bold mx-1" onClick={goPreviousStep} >back</button>
                            <button className="bg-[#00EF75] text-white rounded px-5 h-[33px] text-xl font-bold mx-1" onClick={()=>{setSession(brainDumpList) ;  navigate("/actionTime")}} >start</button>
                        </div>
                </>
            );
          default:
            return <h1 className="bg-red-300" >bro {step}</h1>;
        }
      }

  	return (
    <div className="fixed inset-0 w-screen h-screen ">
        <div className="p-5" >
            {step}
        </div>
        {renderSwitch(currentStep + 1)}
    </div>
  )
}

export default SessionMaker;