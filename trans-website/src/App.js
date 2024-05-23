import './App.css';
import NavCaurosel from './CauroselFolder/NavCaurosel';
import CardBody from './CardFolder/CardBody'; 
import {Routes, Route,} from 'react-router';

function App() {
  return (
    <div className="App" expand = 'nd'>
      <NavCaurosel />
      
      <Routes>
        <Route index element ={<NavCaurosel />}  />
        <Route path='/about' element = {<CardBody/>} />
      </Routes>
      
      {/* <CardBody /> */}
    </div>
  );
}

export default App;
