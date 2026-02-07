import React, {useRef, useState, useReducer} from 'react'
import './App.css'
import List from './component/List'
import { useDispatch } from 'react-redux'
import { addTask } from './store/taskSlice'

//-------------pure function--------------
// const showTaskFunction = (state, action) => {
//   if(action.type === "ADD"){
//     return [action.payload, ...state]
//   }
// }

const App = () => {
  const textRef = useRef();
  const dateRef = useRef();
  const dispatch = useDispatch();

  // -----------------here we add the functionality using useState()---------------
  const [task, setTask] = useState([])

  const handleClick = () => {
    const name = textRef.current.value;
    const date = dateRef.current.value;

    // setTask((prevTasks) => [...prevTasks, {
    //   name: name,
    //   date: date,
    // }])

    dispatch(addTask({
      name: name,
      date:date,
    }))

    textRef.current.value = "";
    dateRef.current.value = "";
  }

  // --------------------here we add the functionality using useReducer()--------------------
  // const [task, dispatchTask] = useReducer(showTaskFunction, []);

  // const handleClick = () => {
  //   const name = textRef.current.value;
  //   const date = dateRef.current.value;

  //   dispatchTask({type: "ADD", payload: {
  //     name:name,
  //     date:date,
  //   }})

  //   textRef.current.value = "";
  //   dateRef.current.value = "";
  // }

  return (
    <div>
      <h1>TODO</h1>
      <div className='design'>
        <input ref={textRef} placeholder='Enter your task' type="text" />
        <input ref={dateRef} type="date" />
        <button onClick={handleClick}>Add Task</button>
      </div>

      <div>
        <h1>Task</h1>
        {/* <List task={task} /> */}
        <List />
      </div>
    </div>
  )
}

export default App