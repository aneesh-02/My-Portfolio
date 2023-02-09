import React from "react";
import { Container } from "@mui/material";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Container maxWidth="xl" id="projects-container">
      <ProjectCard
        title="TITLE"
        description="brief descrition of technologies used.............................."
        details="bullet points in details about the project"
      />
      <ProjectCard
        title="TITLE"
        description="brief descrition of technologies used.............................."
        details="bullet points in details about the project"
      />
      <ProjectCard
        title="TITLE"
        description="brief descrition of technologies used.............................."
        details="bullet points in details about the project"
      />
      <ProjectCard
        title="TITLE"
        description="brief descrition of technologies used.............................."
        details="bullet points in details about the project"
      />
      <ProjectCard
        title="TITLE"
        description="brief descrition of technologies used.............................."
        details="bullet points in details about the project"
      />
      <ProjectCard
        title="TITLE"
        description="brief descrition of technologies used.............................."
        details="bullet points in details about the project"
      />
    </Container>
  );
};

export default Projects;
