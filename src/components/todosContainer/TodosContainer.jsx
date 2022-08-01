import React from 'react'
import './todosContainer.css'
import TodoItems from './todoItems/TodoItems'
import TodoForm from './todoForm/TodoForm'


const removeTodo = (e) => {
    const target = e.target.parentElement
    const confirmation = window.confirm('Are you sure you want to delete the item?')
    if(!confirmation) return;
    target.parentElement.remove()
}

export default function TodosContainer({taskName, deadline, taskNameValue, taskDeadlineValue, addNewItem, tasks}) {
    return (
        <div>
            <div className="add-item">
                <h1>Add Item</h1>
                {/* <p>+</p> */}
            </div>
            <TodoForm taskName={taskName} deadline={deadline} taskNameValue={taskNameValue} taskDeadlineValue={taskDeadlineValue} addNewItem={addNewItem}/>
            <TodoItems removeTodo={removeTodo} tasks={tasks}/>
        </div>
    )
}
