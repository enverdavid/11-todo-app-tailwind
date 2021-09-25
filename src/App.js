import React from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { useState, useEffect } from "react";
import { TodoItem } from "./components/TodoItem";

// const list = [
//   {
//     title: "Alimentar a Mandarina",
//     status: false
//   },
//   {
//     title: "Estudiar JS",
//     status: true
//   },
//   {
//     title: "Preparar comida",
//     status: false
//   }
// ]

function App() {

  const [todoTitle, setTodoTitle] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const handleAddTodo = () => {
    setTodoArray([...todoArray, {title: todoTitle, status: false}]);
    setTodoTitle("");
  }

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("todoList"))) {
      setTodoArray(JSON.parse(localStorage.getItem("todoList")))
    }else {
      setTodoArray(localStorage.setItem( "todoList", JSON.stringify([]) ))
    }
  }, []);

  useEffect(()=> {
    localStorage.setItem("todoList", JSON.stringify(todoArray));
  }, [todoArray]);

  return (
    <div className="h-screen bg-second_green flex justify-center items-center">
      <div className="bg-third_green md:bg-main_green w-full text-white px-10 py-10 rounded md:w-5/12 h-2/3 overflow-scroll">
        <h2 className="text-left text-2xl">TODO list</h2>
        <AddTodo 
          todoTitle={todoTitle} 
          setTodoTitle={setTodoTitle} 
          handleAddTodo={handleAddTodo}
          />
        
          <TodoList>
            {/* children */}
            {todoArray.length > 0 && todoArray.map((task, index) => (
                <TodoItem 
                  title={task.title} 
                  status={task.status}
                  setTodoArray={setTodoArray}
                  todoArray={todoArray}
                  index={index}
                  key={index} />
              ))}
            {/* children */}
          </TodoList>
      </div>
    </div>
  );
}

export default App;
