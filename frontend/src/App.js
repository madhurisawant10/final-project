import React, { useEffect, useState } from "react";
import List from "./components/List";
import axios from "axios";
import { baseURL } from "./utils/constant";

const App = () => {
  const [input, setInput] = useState('')
  const [task, setTask] = useState([])
  const [updateUI, setUpdateUI] = useState(false)
  const [updateId, setUpdateId] = useState(null)

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res)=>{
      console.log(res.data)
    })
  }, [updateUI])

  const addTask = () => {
    axios.post(`${baseURL}/save`, {task: input}).then((res)=>{
      console.log(res.data)
      setInput('')

    })
  }

  return(
    <main>
      <h1 className="title">CURD Operations</h1>
      <section className="input-holder">
        <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
        {/* <input type="text" value={input} onChange={(e) => {e.target.value}} /> */}
        <button type="submit" onClick={addTask}>Add Task</button>
      </section>
      <ul>
        <List 
          key={task._id} 
          id = {task._id}
          task = {task.task}
          setUpdateUI={setUpdateUI}
          
          />
      </ul>
    </main>
  )
}

export default App;