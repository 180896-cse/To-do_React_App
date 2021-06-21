import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core";

function App() {
  const [todos, setTodos]=useState(['Do Extra work','Do Homework']);
  const [input, setInput] = useState('');
  console.log(input);


    //functions for add to do button
  const addtodo= (event)=>{
    event.preventDefault();  // if using form & using temprory state then this function will stop the page to refresh. 
    setTodos([...todos, input]);
    setInput("");   // clear up the input after submittinf the data

  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello User</h1>
        <form>
        <input value={input} onChange={event =>setInput(event.target.value)}/>
        <Button type="submit" onClick={addtodo} variant="contained" color="primary">
          Add to do
        </Button>
        {/* <button type='submit' onClick={addtodo}>Add ToDo</button> */}
        <ul>
          {todos.map(item =>( 
          <li>{item}</li>
          ))}
         
        </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
