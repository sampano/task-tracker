import { Box } from "@mui/material";
import { Task } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Tasks = ({ tasks, deleteTask, changeReminder }) => {
  return (
    <Box
      justifyContent="space-between"
      sx={{
        padding: "10px",
        margin: "auto",
      }}
    >
      {tasks.map((task) => (
        <Paper
          key={task.id}
          elevation={3}
          sx={{
            padding: "10px",
            mb: "10px",
            borderLeft: task.reminder ? 2 : "",
            borderColor: "primary.main",
          }}
          onDoubleClick={() => changeReminder(task.id)}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">{task.text}</Typography>
            <CloseIcon onClick={() => deleteTask(task.id)} />{" "}
            {/* on onClick equals to a function that will call deleteTask delete function from App.js and will send task id as argument*/}
          </div>
          <Typography variant="subtitle2">{task.day}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Tasks;
