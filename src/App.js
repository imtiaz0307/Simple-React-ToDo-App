import React, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import TodosContainer from './components/todosContainer/TodosContainer'

const tasks = []

export default function App() {
    const [searchText, setSearchText] = useState('')
    const [taskName, setTaskName] = useState('')
    const [deadline, setDeadline] = useState('')

    const taskNameValue = (e) => setTaskName(e.target.value)
    const taskDeadlineValue = (e) => setDeadline(e.target.value)



    const addNewItem = (taskName, deadline) => {
        tasks.push({
            taskName: taskName,
            deadline: deadline
        })
        setTaskName('')
        setDeadline('')
    }

    return (
        <div className='appContainer'>
            <Navbar searchText={searchText} setSearchText={setSearchText} />
            <TodosContainer taskName={taskName} deadline={deadline} taskNameValue={taskNameValue} taskDeadlineValue={taskDeadlineValue} addNewItem={addNewItem} tasks={tasks} />
        </div>
    )
}
