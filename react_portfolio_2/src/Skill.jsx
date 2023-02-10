import React from "react";
import { Container } from "@mui/material";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <Container maxWidth="xl" id="skills-container">
      <SkillCard
        title="Ui Ux Design"
        description="One of my key skills is to make a user friendly and efficient design. Making a well-designed prototype leads to some beautiful outcomes."
        image="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2022/04/generate-ideas-thumb-792x528.jpg"
      />
      <SkillCard
        title="Java Development"
        description="Java is my prime and I can develop apps and softwares using Java comfortably."
        image="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2022/04/generate-ideas-thumb-792x528.jpg"
      />
      <SkillCard
        title="Web Development"
        description="Html, css, scss, javascript, php, mySql, node, and React are some of the languages I use to develop a working website."
        image="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2022/04/generate-ideas-thumb-792x528.jpg"
      />
    </Container>
  );
}; 

export default Skills;
