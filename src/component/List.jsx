import React from 'react'
import { useSelector } from 'react-redux'

const List = () => {
  const task = useSelector((state) => state.task);

  return (
    <div>
      {
        task.length === 0
          ? <p>No task added yet</p>
          : task.map((task, index) => (
              <div className='listdesign' key={index}>
                <p>{task.name}</p>
                <p>{task.date}</p>
                <button>Delete</button>
              </div>
            ))
      }
    </div>
  )
}

export default List
