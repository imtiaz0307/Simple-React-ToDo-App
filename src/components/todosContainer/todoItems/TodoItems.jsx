import React from 'react'
import './todoItems.css'

const randomKey = Math.trunc(Math.random() * 100000 + 1)

export default function TodoItems({ removeTodo, tasks }) {
    return (
        tasks.length > 0 ? tasks.map(task => {
            return <div className='todoItem' key={randomKey}>
                <div className="item-details">
                    <h1 className='name'>{task.taskName}</h1>
                    <h3 className="time">{task.deadline}</h3>
                </div>
                <div className="rem-Item" onClick={removeTodo}>
                    <p>x</p>
                </div>
            </div>
        }) : ''
    )
}
