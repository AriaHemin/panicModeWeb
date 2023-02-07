import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../breatingAnimation.css'

function SplashPage(){
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("yo")
            navigate("/home");
        }, 10000);
        return () => clearTimeout(timer);
      }, []);
    
    return(
        <div className="fixed inset-0 bg-[#242424] w-screen h-screen flex justify-center items-center" >
            <div className="">
                <div className="flex items-center justify-center flex-col" >
                    <div className="flex items-center justify-center flex-col " >
                        <div className="relative  w-[100px]  rounded-full h-[100px] bg-[#00FF7D] outerRingBreath " ></div>
                        <div className="relative  w-[80px] bottom-[90px] rounded-full h-[80px] bg-[#00EF75]" ></div>
                    </div>
                    
                </div>
                <div className="" >
                    <div className="  ">loading ...</div>
                </div>
            </div>
        </div>
    )
}


export default SplashPage;



