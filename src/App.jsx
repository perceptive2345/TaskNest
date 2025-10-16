import { useEffect, useState } from "react";
import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";

function App() {
const[tasks, setTasks]  = useState([])

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
});

  const addTask = (task) => {
  setTasks([...tasks,task]);
  }
  return(
    <div>
      <h1>Task Nest</h1>
      <p>Our Friendly Task Manager</p>
      <Taskform addTask={addTask}/>
      <Tasklist />
      <Progresstracker />
      <button>Clear</button>
    </div>
  )
}

export default App;