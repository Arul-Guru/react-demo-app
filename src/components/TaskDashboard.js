import { Link, Outlet, Route, Routes } from "react-router-dom";
import Milestone from "./Milestone"

const TaskDashboard = ()=>{
    return(
        <div className="container">
            <div className="row">
                <Milestone>

                </Milestone>
                <Milestone>

                </Milestone>
                <Milestone>

                </Milestone>
                <Milestone>
                    
                </Milestone>
                <Milestone>

                </Milestone>
                <Milestone>
                    
                </Milestone>
                <Routes>
                    <Route path="/:id"></Route>
                    <Route></Route>
                </Routes>
                <Outlet/>
                <Link to="5"></Link>
            </div>

        </div>
    )
}


export default TaskDashboard;