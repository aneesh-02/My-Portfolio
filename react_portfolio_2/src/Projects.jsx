import React from "react";
import { Container } from "@mui/material";
import ProjectCard from "./ProjectCard";
import calculatorSc from "./Images/calculatorSc.png";
import SdSc from "./Images/SdSc.png";
import snakeSc from "./Images/snakeSc.png";
import GvSc from "./Images/GvSc.png";

const Projects = () => {
  return (
    <Container maxWidth="xl" id="projects-container">
      <ProjectCard
        title="Appointment Booking Site"
        image={GvSc}
        description="HTML, CSS, JavaScript, Bootstrap, jQuery"
        details="• Designed a website for booking Covid-19 vaccine appointments. 
        • Implemented authentication for login page. 
        • The website chronologically walks the user through being eligible, selecting the vaccine dose, clinic, date, time, confirmation etc. 
        • Created a page to view, edit and delete the appointments as well. 
        • Ensured a consistent user-friendly interface using Bootstrap. • Performed Usability testing with the help of volunteers."
      />
      <ProjectCard
        title="Contacts List App"
        image={SdSc}
        description="Java, Swing, JDBC, MySQL, XAMPP"
        details="• Created a Java Window Application to manage a database system.
        • Implemented the database in MySQL using phpMyAdmin and XAMPP server. 
        • App allows users to record, retrieve, edit and delete entries from the database. 
        • Used Window Builder library to design the application interface."
      />
      <ProjectCard
        title="Snake Game"
        image={snakeSc}
        description="Java, Swing, AWT, JPanel"
        details="• Developed a classic 2D Snake Game in Java using Swing framework. 
        • Used Java Abstract Window Toolkit to design the Graphical User Interface of the application.
        • Applied various concepts like JPanel, JFrame and ActionListeners to ensure integrity of the project.
        • Deployed the project as a JAR file to enhance security of the code and provide easy access to the user."
      />
      <ProjectCard
        title="Tic-Tac-Toe"
        image="https://www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
        description="Java, Junit, Eclipse"
        details="• Developed a Java console application to implement a 3x3 Tic-Tac-Toe game. 
        • The game can be played by a single user against the CPU.
        • Used Junit to test the edge cases and ensure seamless functionality."
      />
      <ProjectCard
        title="Music Player Website"
        image={SdSc}
        description="HTML, CSS"
        details="• Built a website for streaming music from a local database without the help of any framework. 
        • Website allows user to browse and select songs across various Playlists, Artists, Genres etc.
        • Used various CSS concepts like flex display, animations and responsive design to ensure integrity of the project."
      />
      <ProjectCard
        title="Ping Pong"
        image={calculatorSc}
        description="HTML, CSS, JavaScript"
        details="• Developed a game of Ping Pong for 2 players. 
        • DOM and Js events are used to enable users to control 2 bats simultaneously."
      />
    </Container>
  );
};

export default Projects;
