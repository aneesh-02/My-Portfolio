import React from "react";
import { Container } from "@mui/material";
import HomeDP from "./HomeDp";
import HomeAbout from "./HomeAbout";

const Home = () => {
  return (
    <section>
      <Container maxWidth="xl" id="home-container">
      <HomeDP/>
      <HomeAbout/>
      </Container>
    </section>
  );
};

export default Home;
