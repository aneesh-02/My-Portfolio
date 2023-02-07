import React from "react";
import { Container } from "@mui/material";
import BasicCard from "./AboutCard";

const About = () => {
  return (
    <section id="about">
      <Container maxWidth="xl" id="about-container">
        <BasicCard />
      </Container>
    </section>
  );
};

export default About;
