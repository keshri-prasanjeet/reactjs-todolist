import { useState, useEffect } from 'react'
import TodoInput from "./assets/components/TodoInput.jsx";
import TodoList from "./assets/components/TodoList.jsx";
function App() {

    const [todos, setTodos] = useState([])
    const [todoValue, setTodoValue] = useState('')
    function persistData(newList) {
        localStorage.setItem('todos', JSON.stringify({todos:newList}))
    }

    function handleAddTodo(newTodo){
        const newTodoList = [...todos, newTodo]
        persistData(newTodoList)
        setTodos(newTodoList)
    }

    function handleEditTodo(index){
        const valueToBeEdited = todos[index]
        setTodoValue(valueToBeEdited)
        handleDeleteTodo(index)
    }

    function handleDeleteTodo(index){
        const newTodoList = todos.filter((todo, todoIndex) =>{
            return todoIndex!==index;
        })
        persistData(newTodoList)
        setTodos(newTodoList);
    }

    useEffect(() => {
        if(!localStorage){
            return
        }

        let localTodos = localStorage.getItem('todos')
        if(!localTodos){
            return
        }

        localTodos = JSON.parse(localTodos).todos;
        setTodos(localTodos)
    }, []);

  return (
    <main>
      <TodoInput todoValue={todoValue}
                 setTodoValue={setTodoValue}
                 handleAddTodos={handleAddTodo}
      />
      <TodoList todoArray={todos}
                handleDeleteTodos={handleDeleteTodo}
                handleEditTodos={handleEditTodo}
      />
    </main>
  )
}

export default App
