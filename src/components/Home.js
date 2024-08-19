import UseCallbackDemo from "./callback/UseCallbackDemo";
import Carousel from "./Carousel"
import { CotextComponent, ThemeContext } from "./context/ContextComponent";
import ThemedComponent from "./context/ThemedComponent";
import ListParent from "./HOC/ListParent";
import Memoparent from "./memo/MemoParent";
import UseMemoDemo from "./memo/UseMemoDemo";
import UseRefdemo from "./Ref/UseRefDemo";
import Table from "./Table"

import { University } from "./University";

const Home = ()=>{
    return(
        <div>
            <Carousel></Carousel>
            <div className="container">
                <div className="row">
                    <Table></Table>
                </div>
                <UseCallbackDemo></UseCallbackDemo>
                <ListParent></ListParent>
                {/* <Memoparent></Memoparent> */}
                <CotextComponent>
                    <ThemedComponent></ThemedComponent>
                    <UseRefdemo></UseRefdemo>
                    <University></University>
                </CotextComponent>
                
                
            </div>
        </div>
        
    )
}


export default Home;