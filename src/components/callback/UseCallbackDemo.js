import { useCallback, useState } from "react"
import ListComponent from "./ListComponent";

const UseCallbackDemo= ()=>{
    const [count , setCount] = useState(0);
    const li = ["java", "python","sql","react"];

    const handleClick = useCallback((elem)=>{
        console.log("Clicked::::",elem)
    },[])

    return(<div>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <ListComponent items={li} clickHandler = {handleClick}></ListComponent>
    </div>)
}

export default UseCallbackDemo;