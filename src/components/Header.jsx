import * as React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function BoxSx() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{
        border: 1,
        width: 500,
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

      <Button variant="contained">Add</Button>
    </Box>
  );
}
