import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";

function App() {
  return(
    <div>
      <h1>Task Nest</h1>
      <p>Our Friendly Task Manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear</button>
    </div>
  )
}

export default App;