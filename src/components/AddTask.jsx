import {
  Checkbox,
  FormLabel,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (!text) {
      alert("Please add task");
      return;
    }
    console.log(reminder);
    addTask({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <FormControl
      fullWidth
      sx={{
        width: "96%",
        padding: "10px",
        margin: "auto",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <TextField
        id="outlined-basic"
        label="Add Task"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ mb: 1 }}
      />
      <TextField
        id="outlined-basic"
        label="Add Date and Time"
        variant="outlined"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        sx={{ mb: 1 }}
      />
      <FormLabel component="legend">
        Set Reminder
        <Checkbox
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </FormLabel>
      <Button variant="contained" sx={{ padding: "15px" }} onClick={onSubmit}>
        Save Task
      </Button>
    </FormControl>
  );
};

export default AddTask;
