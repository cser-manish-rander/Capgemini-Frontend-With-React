import { useState } from "react"

const ConditionalRendering = () => {
    let [flag, setFlag] = useState(true);
    return(
        <>
            <button onClick={()=> {
                setFlag(!flag);
            }}>Change</button>
            
            {flag ? <div style={{height:"300px", background:"red", width:"250px"}}></div> : <div style={{height:"400px", background:"blue", width:"200px"}}></div>}
            

            {flag && <h1>This is true</h1>}
        </>
    )
}

export default ConditionalRendering