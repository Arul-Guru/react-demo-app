import { useEffect, useState } from "react"
import SearchBox from "./SearchBox";
import DisplayUniv from "./DisplayUniv";
import axiosInstance from "./axiossetup/axiosSetup";

export const University = ()=>{
    const [univ, setUniv] = useState([]);
    const [search, setSearch] = useState();

    useEffect(()=>{
        async function getUniv (){
            axiosInstance.get(`http://universities.hipolabs.com/search?country=${search}`).then(
                res=>{
                    console.log(res);
                    setUniv(res.data);
                }
            ).catch((err)=>{
                console.log(err)
            })
            // let response = await fetch(`http://universities.hipolabs.com/search?country=${search}`);
            // let data = await response.json();
            // setUniv(data);
        }
        getUniv();
    },[search]);


    return(
        <div>
             <DisplayUniv univ = {univ}></DisplayUniv>
             <SearchBox setSearch = {setSearch}></SearchBox>
        </div>
       
    )
}