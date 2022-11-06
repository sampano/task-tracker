import * as React from "react";
import { Box, Typography, Button } from "@mui/material";

const Header = ({ onAdd, showAddTask }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{
        padding: "10px",
        margin: "auto",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "40px" }}>
        Task Tracker
      </Typography>

      <Button
        variant="contained"
        color={showAddTask ? "error" : "primary"}
        onClick={onAdd}
      >
        {" "}
        {showAddTask ? "Close" : "Add"}
      </Button>
    </Box>
  );
};

export default Header;
