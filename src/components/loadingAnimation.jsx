import '../breatingAnimation.css'
import { useEffect } from "react";
function LoadingAnimation(props){
    let loading = props.loading
    let setLoading = props.setLoading
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
    return(
        <>{
            loading ? (
                <div className="fixed inset-0 bg-[#242424] w-screen h-screen flex justify-center items-center z-50" >
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
            ) : null
        }
        </>
    )
}
export default LoadingAnimation;