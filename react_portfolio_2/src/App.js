import "./App.css";
import AppBar from "./AppBar.jsx";
import Home from "./Home.jsx";
import Skills from "./Skill";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Home />
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;
