import React from "react";
import { Container } from "@mui/material";
import SkillCard from "./SkillCard";
// import java from "./Images/javalogo.png";

const Skills = () => {
  return (
    <Container maxWidth="xl" id="skills-container">
      <SkillCard
        title="Ui Ux Design"
        description="With an eye for detail and a passion for creating intuitive user experiences, I have a proven track record of designing effective and visually appealing interfaces for both web and mobile platforms."
        image="http://www.mobileappoutsourcing.com/wp-content/uploads/2017/08/ui-ux.jpg"
      />
      <SkillCard
        title="Java Development"
        description="Proficient in Java, I have extensive experience in developing scalable, secure and reliable applications that meet the needs of clients. With a strong understanding of Java best practices, I am committed to delivering high-quality software solutions."
        image="https://www.devopsschool.com/blog/wp-content/uploads/2022/03/java_logo_icon_168609.png"
      />
      <SkillCard
        title="Web Development"
        description=" I am an experienced full-stack web developer with a passion for creating dynamic, user-friendly websites. I have a strong understanding of front-end and back-end technologies and have experience building websites using a variety of frameworks and tools."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wNOpW2MrjNZu2Wj4-utA_3QI9Yk0PgY5OA&usqp=CAU"
      />
    </Container>
  );
};

export default Skills;
