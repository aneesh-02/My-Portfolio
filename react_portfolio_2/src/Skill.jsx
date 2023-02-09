import React from "react";
import { Container } from "@mui/material";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <Container maxWidth="xl" id="skills-container">
      <SkillCard
        title="UI UX DESIGN"
        description="One of my key skills is to make a user friendly and efficient design. Making a well-designed prototype leads to some beautiful outcomes."
      />
      <SkillCard
        title="JAVA DEVLOPMENT"
        description="Java is my prime and I can develop apps and softwares using Java comfortably."
      />
      <SkillCard
        title="WEB-DEVELOPMENT"
        description="Html, css, scss, javascript, php, mySql, node, and React are some of the languages I use to develop a working website."
      />
    </Container>
  );
};

export default Skills;
