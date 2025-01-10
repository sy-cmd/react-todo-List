
import { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import newFile from './components/newFile'
function App() {

  const [todoValue, setTodoValue]=useState('')
 
const [ todos,setTodos]=useState([

])
function persisData(newList){
  localStorage.setItem('todos', JSON.stringify({todos:newList}))
}

function handleAddTodos (newTodo){
  const newTodoList =[...todos,newTodo]
  persisData(newTodoList)
  setTodos(newTodoList)
}

function handleDeleteTodo(index){
  const newTodoList = todos.filter((todo,todoIndex)=>{
    return todoIndex !== index
  })
  persisData(newTodoList)
  setTodos(newTodoList)
}

function handleEditTodo(index){
  const valueToBeEdited =todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)
}

useEffect(()=>{
  if(!localStorage){
    return
  }

  let localTodos = localStorage.getItem('todos')
  if (!localTodos){
    return
  }
  localTodos= JSON.parse(localTodos).todos
  setTodos(localTodos)
},[])

  return (
    <>
    <h1 className='h1-header'>To Do List</h1>
    <p className='para'>Imagination is more important than knowledge </p>
     <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos= {handleAddTodos} />
     <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}  todos={todos} />
    
    </>
  )
}

export default App
