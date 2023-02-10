import React from "react";
import { Container } from "@mui/material";
import HomeButtons from "./HomeButtons";
import HomeDP from "./HomeDp";
import HomeAboutCard from "./HomeAboutCard";

const Home = () => {
  return (
    <Container maxWidth="xl" id="home-container">
      <HomeButtons />
      {/* <HomeDP /> */}
      <HomeAboutCard />
    </Container>
  );
};

export default Home;
