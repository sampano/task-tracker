import { Box, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Tasks = ({ tasks }) => {
  console.log(tasks);
  return (
    <Box
      justifyContent="space-between"
      sx={{
        border: 1,
        width: 500,
        padding: "10px",
        margin: "auto",
      }}
    >
      {tasks.map((task) => (
        <Paper
          key={task.id}
          elevation={3}
          sx={{ width: "96%", padding: "10px", mb: "10px" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">{task.text}</Typography>
            <CloseIcon />
          </div>
          <Typography variant="subtitle2">{task.day}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Tasks;
