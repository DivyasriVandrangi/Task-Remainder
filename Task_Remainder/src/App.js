import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Task from './components/Task'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState( [
    {
        id: 1,
        text: 'Excercise',
        day: 'June 29th at 7:00am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Online Class',
        day: 'June 29th at 9:00am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Study',
        day: 'June 29th at 3:00pm',
        reminder: false,
    },

])
// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Remainder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id 
  ? { ...task, reminder: 
    !task.reminder } : task
  )
)
}


  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}/>
    ) : (
      'No Tasks TO Show'
    )}
    </div>
  );
}

export default App;
