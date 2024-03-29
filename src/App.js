import "./App.css";
import AppBar from "./AppBar.jsx";
import Home from "./Home.jsx";
import Header from "./Header";
import Skills from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#5886b5", // a shade of blue as the primary color
    },
    secondary: {
      main: "#2ec5d3", // a shade of red as the secondary color
    },
    background: {
      default: "#68bcda", // a light gray background color
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', "sans-serif"].join(","),
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
        fontWeight: 600,
        textTransform: "none",
        padding: "10px 30px",
      },
      contained: {
        boxShadow: "none",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar />
        <Home />
        <Header text="SKILLS" name="skills-header" />
        <Skills />
        <Header text="PROJECTS" />
        <Projects />
        <Header text="CONNECT" />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
