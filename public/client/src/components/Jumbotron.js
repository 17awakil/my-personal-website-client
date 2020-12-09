import React, { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import photo from "../images/avatar.jpg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getWelcomeMessage } from "../actions/welcomeMessageActions";

function Jumbotron(props) {
  useEffect(() => props.getWelcomeMessage(), []);
  const msg = props.message.message || "";
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      margin="4em"
    >
      <img
        src={photo}
        alt="André Wakil"
        width="200"
        style={{ borderRadius: "50%", margin: "1em" }}
      ></img>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        margin="auto"
      >
        <Typography variant="h3" align="center">
          {msg && msg[0].message}
        </Typography>
      </Box>
    </Box>
  );
}
Jumbotron.propTypes = {
  getWelcomeMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  message: state.welcomeMessage,
});
export default connect(mapStateToProps, { getWelcomeMessage })(Jumbotron);
