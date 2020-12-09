import React, { useEffect } from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getWelcomeMessage } from "../actions/welcomeMessageActions";
import { v4 as uuidv4 } from "uuid";

function AboutMe(props) {
  useEffect(() => props.getWelcomeMessage(), []);
  const { message } = props;
  var lst = [];
  if (message.message !== "" && message.message[1].aboutMe) {
    lst = message.message[1].aboutMe.map((m) => (
      <li key={uuidv4()} style={{ color: "white" }}>
        <Typography variant="body1" style={{ color: "white" }}>
          {m}
        </Typography>
      </li>
    ));
  }
  return (
    <Paper
      elevation={8}
      style={{
        padding: "2em",
        margin: "1.5em",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Box
        margin="auto"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        fontWeight="fontWeightBold"
        marginBottom="0.75em"
      >
        <Typography variant="h4" style={{ color: "#f9a825" }}>
          A little bit about me...
        </Typography>
      </Box>
      <ul>{lst}</ul>
    </Paper>
  );
}
AboutMe.propTypes = {
  getWelcomeMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  message: state.welcomeMessage,
});
export default connect(mapStateToProps, { getWelcomeMessage })(AboutMe);
