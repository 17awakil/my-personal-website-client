import React from "react";
import Jumbotron from "../components/Jumbotron.js";
import Resume from "../components/resume/Resume.js";
import { Box } from "@material-ui/core";
import AboutMe from "../components/AboutMe.js";

function Home() {
  return (
    <Box
      width="50%"
      margin="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Jumbotron></Jumbotron>
      <AboutMe></AboutMe>
      <Resume></Resume>
    </Box>
  );
}
export default Home;
