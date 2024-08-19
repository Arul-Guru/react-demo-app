import './App.css';
import Tasks from './components/TaskDashboard'
import Nav from './components/Navi'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Paragraph from './components/Paragraph';
import Hello from './components/hello/Hello';

function App() {
  const list = [1,2,3,4,5,6];

 
  return (
    <div>
      <Router>
      <Nav></Nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tasks/*" element={<Tasks/>}/>
          {/* <Route path='/task/:id' element={}></Route> */}
          <Route path="/blog" element={<Paragraph numbers = {list}/>}/>
            
        </Routes>
        
        

      </Router>
      <Hello name="arul"></Hello>
    </div>
    
  );
}

export default App;
