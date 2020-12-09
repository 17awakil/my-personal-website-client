import React from "react";
import { Box, Typography } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const styles = {
  color: "white",
};
function ResumeSubsection(props) {
  const bulletPoints = props.bulletPoints || [];
  var list;
  var subtitle;
  var date;
  var cGPA;
  if (props.section === "Education") {
    subtitle = (
      <Typography variant="subtitle1" style={styles}>
        {"Bachelor of " + props.major}
      </Typography>
    );
    cGPA = (
      <Typography variant="subtitle1" style={styles}>
        {"cGPA: " + props.cGPA + "/4.0"}
      </Typography>
    );
    date = (
      <Typography variant="subtitle1" style={styles}>
        {props.startDate + "-" + props.endDate}
      </Typography>
    );
  } else {
    list = bulletPoints.map((bp) => (
      <li key={uuidv4()}>
        <Typography variant="body1" style={styles}>
          {bp}
        </Typography>
      </li>
    ));
  }
  return (
    <Box>
      <Box display="flex" flexDirection="row" alignItems="start">
        <Typography variant="h6" style={styles}>
          {props.title}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        {props.section.title !== "Education" && typeof list !== "undefined" && (
          <ul style={styles}>{list}</ul>
        )}
        {subtitle}
        {cGPA}
        {date}
      </Box>
    </Box>
  );
}
export default ResumeSubsection;
