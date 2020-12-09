import { Box, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import ResumeSection from "./ResumeSection";
import ResumeSubsection from "./ResumeSubsection";
import { connect } from "react-redux";
import { getSections } from "../../actions/sectionActions";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
function Resume(props) {
  useEffect(() => props.getSections(), []);
  const { sections } = props;
  var resume = [];
  if (typeof sections !== undefined) {
    const sectionsToUpdate = sections || [];
    resume = sectionsToUpdate.map((section) => (
      <ResumeSection key={section._id} title={section.name} margin="auto">
        {section.subsections.map((sub) => (
          <ResumeSubsection
            section={section.name}
            key={uuidv4()}
            title={sub.name}
            bulletPoints={sub.bulletpoints}
            major={sub.major}
            startDate={sub.startDate}
            endDate={sub.endDate}
            cGPA={sub.cGPA}
            relevantCoursework={sub.relevantCoursework}
          ></ResumeSubsection>
        ))}
      </ResumeSection>
    ));
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop="5em"
    >
      <Box flexDirection="row" margin="auto">
        <Typography variant="h4">My Resume</Typography>
      </Box>
      {resume}
    </Box>
  );
}
Resume.propTypes = {
  getSections: PropTypes.func.isRequired,
  sections: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  sections: state.sections.items,
});
export default connect(mapStateToProps, { getSections })(Resume);
