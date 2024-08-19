import { useState } from "react";
import UseMemoDemo from "./UseMemoDemo";

const Memoparent = ()=>{
    const[count, setCount] = useState(0);

    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>click</button>
            <UseMemoDemo num={count}></UseMemoDemo>

        </div>
    )
}

export default Memoparent;