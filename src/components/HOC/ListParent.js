import { useEffect, useState } from "react"
import ListHOC from "./ListHOC";
import ListComponent from "./ListComponent";

const ListParent = ()=>{
    const[data,setData] = useState([]);
    const[loading, setLoading] = useState(true)

    const ListWithLoading = ListHOC(ListComponent);

    useEffect(
        ()=>{
            setTimeout(
                ()=>{
                    setData([{id:1,name:"Mobile"},{id:2,name:"TV"},{id:3,name:"Headphones"}])
                    setLoading(false);
                },2000
            )
          
        },[]
    )

    return(
        <div>
            <h1>LIST</h1>
            <ListWithLoading isLoading={loading} data={data}></ListWithLoading>
        </div>
    )
}

export default ListParent;