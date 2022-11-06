import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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
  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
