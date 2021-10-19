import { useState } from "react"
import Usetitlecount from "./usetitlecount"


const Test = () => {
    const [count,setCount] = useState(0)
    Usetitlecount(count)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>click here</button>
        </div>
    )
}

export default Test
