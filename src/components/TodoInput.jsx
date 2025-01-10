import React, { useState } from 'react'

export default function TodoInput(props) {

    const { handleAddTodos ,setTodoValue,todoValue} = props

   

  return (
    <header>
        <input value={todoValue} onChange={(e)=>{
            setTodoValue(e.target.value)
        }}  placeholder='Enter tofo....'></input>
        
        <button onClick={()=>{handleAddTodos(todoValue)
             setTodoValue('')
        }
                           
    } >Add</button>
    </header>
  )
}
