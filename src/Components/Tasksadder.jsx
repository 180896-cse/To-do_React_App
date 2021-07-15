import React,{useState} from 'react';
import '../Styles/Taskadder.css';
function Tasksadder() {
    const[todos,setTodos]=useState(['hello','hey','yello']);





    const[input,setInput]=useState('');
    console.log(input);






    const addTodo = (event) =>{
        event.preventDefault();
        setTodos([...todos, input]);
        setInput('');
        
    }
    



    return (
        <div>

            <form>
            <input value={input} onChange={event => setInput(event.target.value)} />
            <button type='submit' onClick={addTodo}>Add Todo</button>
            </form>
            
            
            
            
           <div style={{backgroundColor:'teal',}}> 
            <ul>
        {todos.map(todo=>(                           
            <li> {todo} [To be Done] </li>
        ))}
        </ul>
        </div>



        </div>
    )
}

export default Tasksadder;
