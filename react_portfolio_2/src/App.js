import "./App.css";
import AppBar from "./AppBar.jsx";
import Home from "./Home.jsx";
import Header from "./Header";
import Skills from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Home />
      <Header text="SKILLS" />
      <Skills />
      <Header text="PROJECTS" />
      <Projects />
      <Header text="CONNECT" />
      <Contact />
    </div>
  );
}

export default App;
