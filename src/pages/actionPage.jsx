

export default function ActionPage(props){
    let session = props.session
    return(
        <div>
            {
                session.map((item)=>{
                    return(
                        <div key={item.key} className="flex flex-row justify-between" >
                            <p>{item.title}</p>
                            
                        </div>
                    )
                })
            }
        </div>
        
    )

}