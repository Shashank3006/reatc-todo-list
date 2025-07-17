import React, { useState } from 'react';
import GetInput from './components/GetInput';
import ToDoList from './components/ToDoList';
import Header from './components/Header';

function App() {
  //define  state for todo store 
  const [todo, setTodo] = useState([]);

  return (
    <>
    {/* header component add */}
    <Header/>
    {/* GetInput component add and pass setTodo as a props */}
      <GetInput setTodo={setTodo} />
          {/* ToDoList component add and pass setTodo and todo as a props */}
      <ToDoList setTodo={setTodo} todo={todo} />
    </>
  );
}

export default App;
