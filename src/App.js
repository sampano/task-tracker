import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { Box } from "@mui/system";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      text: "Doctor's Appointment",
      day: "Feb 5th @ 2:30pm",
      reminder: true,
      id: 1,
    },
    {
      text: "Meeting at School",
      day: "Feb 6th @ 2:20pm",
      reminder: true,
      id: 2,
    },
    {
      text: "Dinner with my Wife",
      day: "Feb 10th @ 2:30pm",
      reminder: false,
      id: 3,
    },
  ]);
  // ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    console.log("addtak", task);
    setTasks([...tasks, newTask]);

    console.log(tasks);
  };
  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    //filter task that is not equal to the id from Task.jsx and show it
  };

  //TOGGLE REMINDER
  const changeReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
      //map thru tasks and if  the task id is equal to the id from Task.jsx then copy the object excep reminder change to the opposite of the value of the task else just show task
    );
  };
  return (
    <Box
      className="App"
      justifyContent="space-between"
      sx={{
        padding: "20px",
        mt: "150px",
        border: 1,
        width: 400,
        mx: "auto",
      }}
    >
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          changeReminder={changeReminder}
        />
      ) : (
        "No Tasks To Show"
      )}
    </Box>
  );
}

export default App;
