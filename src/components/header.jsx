import { useState } from "react";
function Header(){
    const [isMenuActive, setIsMenuActive] = useState(false)
    return(
        <div className="absolute inset-0 h-12" >
            {!isMenuActive ? 
            <div className="flex justify-end" >
                <div className="m-2" onClick={()=>{setIsMenuActive(!isMenuActive)}} >
                    <svg className=" w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </div>
            </div>
            :
            <div className="flex flex-col h-[200px] bg-[#00EF75] " >
                <div className="flex justify-end" >
                    <div className=" m-1" onClick={()=>{setIsMenuActive(!isMenuActive)}} >
                        <svg className="w-10 h-10 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                    </div>
                </div>
                <div className="flex flex-col justify-center " >
                    <div className="text-4xl font-bold font-white">settings</div>
                    <div className="text-4xl font-bold font-white">about</div>
                    <div className="text-4xl font-bold font-white">tutorial</div>
                </div>
            </div>
            }
        </div>
    )
}
export default Header;