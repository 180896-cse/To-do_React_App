import logo from './Assests/logo.svg';
import bclbg from './Assests/background-to-do-app.svg';
import './App.css';
import Header from './Components/Header';
import Tasksadder from "./Components/Tasksadder_firebase";


var sectionStyle = {
  backgroundImage: `url(${bclbg})`,
  backgroundSize:'cover',
  backgroundPosition:'centre',
  height:'100vh',
  width:'100vw',
  
};




function App() {
  return (
    <div style={sectionStyle} className="App">
     
     <Header/>
     <Tasksadder/>
     

     
    </div>
  );
}

export default App;
