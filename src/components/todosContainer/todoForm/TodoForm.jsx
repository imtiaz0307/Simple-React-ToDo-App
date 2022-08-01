import React from 'react'
import './todoForm.css'

export default function TodoForm({taskName, deadline, taskNameValue, taskDeadlineValue, addNewItem}) {
  return (
    <form className="todoForm" onSubmit={(e) => {
        e.preventDefault()
        addNewItem(taskName, deadline)}
        }>
                <label htmlFor="taskName">Task Name</label>
                <input type="text" name='taskName' id='taskName' value={taskName} onChange={taskNameValue}/>
                <label htmlFor="taskDeadline">Task Deadline</label>
                <input type="text" name='taskDeadline' id='taskDeadline' value={deadline} onChange={taskDeadlineValue}/>
                <input type="submit" value='Submit' className='btn' style={{cursor: 'pointer',
            backgroundColor: 'rgb(0, 0, 61)',
            color: 'white',
            marginTop: '1rem'}}/>
            </form>
  )
}
