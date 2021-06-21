import React,{useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";



function App() {
  const [todos, setTodos]=useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      // console.log(snapshot.docs.map(item => item.data()));
       setTodos(...todos,snapshot.docs.map(doc=> doc.data().todo));
      

    })
  }, [])


    //functions for add to do button
  const addtodo= (event)=>{
    event.preventDefault();  // if using form & using temprory state then this function will stop the page to refresh. 



     //Now we are taking input and storing in firebase and also odering by using timestamp of server because that can be consistent for all users
    db.collection("todos").add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })


  
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
        
        <Button disabled={!input} type="submit" onClick={addtodo} variant="contained" color="primary"> 
          Add to do
        </Button>
        {/* <button type='submit' onClick={addtodo}>Add ToDo</button> */}
        <ul>
          {todos.map(todo =>( 
          <Todo text={todo} />
          ))}
         
        </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
