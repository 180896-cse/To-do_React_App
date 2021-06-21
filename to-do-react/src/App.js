import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos]=useState(['Do Extra work','Do Homework']);
  const [input, setInput] = useState('');
  console.log(input);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello User</h1>
        <input value={input} onChange={event =>setInput(event.target.value)}/>
        
        <button>Add ToDo</button>
        <ul>
          {todos.map(item =>( 
          <li>{item}</li>
          ))}
         
        </ul>
      </header>
    </div>
  );
}

export default App;
