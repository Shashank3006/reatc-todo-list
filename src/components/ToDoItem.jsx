import React, { useState } from 'react';
{/*function (component )ToDoItem for  show the  todo data line by  line   */}
{/*get the props as a arument and we deStrucher the prope data, setTodo, todo */}
function ToDoItem({ data, setTodo, todo }) {
  //define two useState Hooks 
  //that state hendal  edit data opction its inisial value is false
  const [editEnabled, setEditEnabled] = useState(false);
  //that state hendel input value its inisial value is data
  const [todoInput, setTodoInput] = useState(data?.data);
//thet function togle the isDone  if 
  function checkTodoItem(e, id) {
    const updatedTodos = todo.map((todoItem) => {
      if (todoItem.id === id) {
        //togel the isDone 
        todoItem.isDone = !todoItem.isDone;
      }
      //return todos
      return todoItem;
    });
    //update todos data store the setTodo
    setTodo(updatedTodos);
  }
//that function delete the pertiquler data he is get the id as a parameter
  function deleteTodo(e, id) {
    //using filter method which id is not equal to id  add a new   array  and that way we delete that pertiquler id
    setTodo((prevTodos) => prevTodos.filter((todoItem) => todoItem?.id !== id));
  }
//that function handel the edit funcenality
  function editTodo() {
    //update state EditEnabled using setEditEnabled function and update true
    setEditEnabled(true);
  }
//function for  sava todo
  function saveTodo(e, id) {
    //check todo list data  using map and which todo item id equal  to id  then updata that object data value to todoInput          todoItem.data = todoInput;

    setTodo((prevTodos) =>
      prevTodos.map((todoItem) => {
        //if todoItem.id equal to id then update todoItem.data value to  todoInput value
        if (todoItem.id === id) {
          todoItem.data = todoInput;
        }
        //return updeted todoItem
        return todoItem;
      })
    );
    //update state EditEnabled using setEditEnabled function and update false
    setEditEnabled(false);
  }

  return (
    <article className={`flex w-full rounded-sm items-center gap-1 ${data?.isDone ? "opacity-50" : "opacity-100"}`}>
      <input
      //use state editEnabled inisial value true when click edit button then its value false and its readOnly mode will off
        readOnly={!editEnabled}
        //use state todoInput if  any value pass GetInput component input feld then show and editEnabled false than change 
        value={todoInput}
        //if any change in value then using onChange evant call function setTodoInput and update the state
        onChange={(e) => setTodoInput(e.target.value)}
        className={`w-full outline-none py-1 ps-2 pe-3 bg-slate-300 rounded-sm ${
          data?.isDone ? "bg-green-400" : ""
        }`}
      />
      {/* if is editEnabled false then show edit and call function editTodo when click edit button*/}
      {!editEnabled ? (
        <button
          onClick={() => editTodo(data?.id)}
          className="text-sm bg-sky-600 text-white px-2 py-1 rounded"
        
        >
          Edit
        </button>
      ) : (
       //if is editEnabled true then show Save and call function saveTodo when click Save button
        <button
          onClick={(e) => saveTodo(e, data?.id)}
          className="text-sm bg-sky-600 text-white px-2 py-1 rounded"
        >
          Save
        </button>
      )}
      <button
      //if click delete button then call function deleteTodo and pass id  as a argument 
        onClick={(e) => deleteTodo(e, data?.id)}
        className="text-sm bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
      <button
      ///if click Done button then call function checkTodoItem and pass id  as a argument  that function change css
        onClick={(e) => checkTodoItem(e, data?.id)}
        className="text-sm bg-green-600 text-white px-2 py-1 rounded"
      >
        Done
      </button>
    </article>
  );
}

export default ToDoItem;
