import { useState } from "react";
//import uuid for get unique id
import { v4 as uuidv4 } from "uuid";

function GetInput({ setTodo }) {
  //use useState hook to manage or hendel tha data input filed 
  //data to store the input value
  //setdata function for update the data value
  const [data, setData] = useState("");
// when click submit button than  handleTodoData function call
  function handleTodoData(e) {
    e.preventDefault();
//if data  empity then return
    if (data.trim() === "") return;
//declear todo object 
    const todo = {
      //using uuidv4 get unique id
      id: uuidv4(),
      //data store state data
      data: data,
      isDone: false,
    };
//setTodo store or update old todo and new todo
    setTodo((state) => [...state, todo]);
    setData(""); // Clear input field after adding
  }

  return (
    <>
      <form
      //when click submit button then call  function handleTodoData
        onSubmit={handleTodoData}
        className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg max-w-md mx-auto"
      >
        {/* define input feald its controle componet because we declear feald value and data hendel onChange event  */}
        <input
          type="text"
          
          value={data}
          //when data  change onChange function call setData and that function get value and update data store to data state
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter a task"
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default GetInput;
