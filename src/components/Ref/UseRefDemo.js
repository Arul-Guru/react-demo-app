import { useEffect, useRef, useState } from "react";

const UseRefdemo = ()=>{

    const inputRef = useRef(null);
    const [value, setvalue] = useState("");

    useEffect(()=>{
        inputRef.current = value;
    },[value])

    const handleClick = ()=>{
        // console.log(inputRef.current.value)
        setvalue(inputRef.current.value)
    }
return(
    <div>
        <input ref={inputRef} type="text"></input>
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
        <p>
            {inputRef.current}
        </p>
    </div>
)
}

export default UseRefdemo;