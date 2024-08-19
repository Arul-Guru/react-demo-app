import { useMemo } from "react";

const UseMemoDemo = ({num})=>{
    const calc = (num)=>{
        console.log(num);

        let sum = 0;
        for(let i =0; i< num; i++){
            sum += i;
        }
        console.log(sum);
        return sum;
    }

    const res = useMemo(()=>{return calc(num)},[num])


    return(
        <div>{res}</div>
    )

}

export default UseMemoDemo;