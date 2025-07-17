import ToDoItem from './ToDoItem';
//that  function show todoList data  and its function get props as argumet 
function ToDoList({ setTodo, todo }) {
  return (
    <section className="space-y-3 px-4 py-6 max-w-md mx-auto">
      
        {/* check todo store anythyng   if store anything  then using map(hiegher order function) todo all data show usnig ToDoItem */}
      {todo.length ? (
        todo.map((data) => (
            //return ToDoItem for all data and ToDoItem pass  setTodo method , todo list and todo data as  a props
          <ToDoItem key={data.id} data={data} setTodo={setTodo} todo={todo} />
        ))
      ) :   (
        //if todo array is   empity then so No data found
        <h1 className="text-center text-gray-500">No data found</h1>
      )}
    </section>
  );
}
{/* ToDoList default  export*/}
export default ToDoList;
