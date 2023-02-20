import React from "react";
import { Container } from "@mui/material";
import ProjectCard from "./ProjectCard";
import calculatorSc from "./Images/calculatorSc.png";
import SdSc from "./Images/SdSc.png";
import snakeSc from "./Images/snakeSc.png";
import GvSc from "./Images/GvSc.png";
import tttSc from "./Images/tttSc.png";
import TodoSc from "./Images/TodoSc.png";
import flappy from "./Images/flappySc.png";
import DGSc from "./Images/DGSc.png";
import counter from "./Images/counterSc.png";

const Projects = () => {
  return (
    <Container maxWidth="xl" id="projects-container">
      <ProjectCard
        title="Daily Greetings"
        image={DGSc}
        description="Personal Dashboard App"
        description2="JavaScript, Ajax, jQuery, REST API, Git"
        path1="https://aneesh-02.github.io/Daily-Greetings/"
        path2="https://github.com/aneesh-02/Daily-Greetings"
        details="• Created a personal organization app with dashboard functionality.
        • Integrated multiple REST APIs to dynamically display real-time weather, inspirational quotes, and visually captivating backgrounds.
        • Featured a user-friendly to-do list, enabling easy creation, viewing, and deletion of tasks.
        • Utilized jQuery to simplify DOM manipulation providing faster, seamless user experience.
        • Implemented efficient data caching using Ajax to minimize the overhead of repeated network calls and enhance performance."
      />

      <ProjectCard
        title="GetVaxxed"
        image={GvSc}
        description="Vaccination appointment booking website"
        description2="HTML, CSS, JavaScript, Bootstrap, jQuery"
        path1="https://aneesh-02.github.io/Get-Vaxxed/"
        path2="https://github.com/aneesh-02/Get-Vaxxed"
        details="• Designed a website for booking Covid-19 vaccine appointments. 
        • Implemented authentication for login page. 
        • The website chronologically walks the user through being eligible, selecting the vaccine dose, clinic, date, time, confirmation etc. 
        • Created a page to view, edit and delete the appointments as well. 
        • Ensured a consistent user-friendly interface using Bootstrap. • Performed Usability testing with the help of volunteers."
      />
      <ProjectCard
        title="Flappy Bird"
        image={flappy}
        description="Flappy Bird Web Game"
        description2="HTML Canva, JavaScript"
        path1="https://aneesh-02.github.io/Flappy-Bird/"
        path2="https://github.com/aneesh-02/Flappy-Bird"
        details="• Built a web-based classic Flappy Bird game using JavaScript for game logic and HTML canvas for animations. 
        • By utilizing GitHub pages, the developed game was hosted for public access."
      />
      <ProjectCard
        title="Snake Game"
        image={snakeSc}
        description="Java snake game application"
        description2="Java, Swing, AWT, JPanel"
        path1=""
        path2="https://github.com/aneesh-02/Snake"
        details="• Developed a classic 2D Snake Game in Java using Swing framework. 
        • Used Java Abstract Window Toolkit to design the Graphical User Interface of the application.
        • Applied various concepts like JPanel, JFrame and ActionListeners to ensure integrity of the project.
        • Deployed the project as a JAR file to enhance security of the code and provide easy access to the user."
      />
      <ProjectCard
        title="Soundash"
        image={SdSc}
        description="Music Streaming website"
        description2="HTML, CSS"
        path1=""
        path2="https://github.com/aneesh-02/Soundash"
        details="• Built a website for streaming music from a local database without the help of any framework. 
        • Website allows user to browse and select songs across various Playlists, Artists, Genres etc.
        • Used various CSS concepts like flex display, animations and responsive design to ensure integrity of the project."
      />
      <ProjectCard
        title="ToDos"
        image={TodoSc}
        description="Java To-dos List application"
        description2="Java, Swing, JDBC, MySQL, XAMPP"
        path1=""
        path2="https://github.com/aneesh-02/ToDo-App"
        details="• Created a Java Window Application to manage a database system.
        • Implemented the database in MySQL using phpMyAdmin and XAMPP server. 
        • App allows users to record, retrieve, edit and delete entries from the database. 
        • Used Window Builder library to design the application interface."
      />

      <ProjectCard
        title="Calculator"
        image={calculatorSc}
        description="Online Calculator website"
        description2="HTML, CSS, JavaScript"
        path1=""
        path2="https://github.com/aneesh-02/Calculator"
        details="• Developed a calculator with a user-friendly GUI.
        • Calculator can perform basic arithmetic functions while handling decimal and negative numbers. "
      />
      <ProjectCard
        title="Counter"
        image={counter}
        description="Online Counter"
        description2="HTML, CSS, JavaScript"
        path1="https://aneesh-02.github.io/Flappy-Bird/"
        path2="https://github.com/aneesh-02/Flappy-Bird"
        details="• Built a web-based classic Flappy Bird game using JavaScript for game logic and HTML canvas for animations. 
        • By utilizing GitHub pages, the developed game was hosted for public access."
      />
      <ProjectCard
        title="Tic-Tac-Toe"
        image={tttSc}
        description="Java console Tic-Tac-Toe application"
        description2="Java, Junit, Eclipse"
        path1=""
        path2="https://github.com/aneesh-02/Tic-Tac-Toe"
        details="• Developed a Java console application to implement a 3x3 Tic-Tac-Toe game. 
        • The game can be played by a single user against the CPU.
        • Used Junit to test the edge cases and ensure seamless functionality."
      />
    </Container>
  );
};

export default Projects;
