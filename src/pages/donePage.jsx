import { useNavigate } from "react-router-dom"
export default function Done(){
    const navigate = useNavigate()
    return(
        <div>
            <div className="text-xl font-bold">you did it!</div>
            <button  onClick={()=>{navigate("/")}}  >back home</button>
        </div>
    )
}