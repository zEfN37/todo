import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,setTodos,changer}) => {
    return (
        <div className='list__container'>
            <div className='todos'>
                {changer.map(todo => {
                    return (
                        <Todo todos={todos} setTodos={setTodos} todo={todo} text={todo.text} id={todo.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList
