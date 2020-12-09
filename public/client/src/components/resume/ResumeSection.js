import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
export default function ResumeSection(props) {
  return (
    <Paper
      elevation={8}
      style={{
        padding: "2em",
        margin: "1.5em",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box fontWeight="fontWeightBold" marginBottom="0.75em">
        <Typography variant="h4" style={{ color: "#f9a825" }}>
          {props.title}
        </Typography>
      </Box>
      {props.children}
    </Paper>
  );
}
