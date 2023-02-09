import "./App.css";
import AppBar from "./AppBar.jsx";
import Home from "./Home.jsx";
import Header from "./Header";
import Skills from "./Skill";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Home />
      <Header text="SKILLS" />
      <Skills />
      <Header text="PROJECTS" />
      <Projects />
      <Header text="CONTACT" />
      {/* <Home /> */}
    </div>
  );
}

export default App;
