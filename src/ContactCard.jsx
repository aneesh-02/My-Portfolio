import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import resume from "./Images/resume.pdf";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const card = (
  <React.Fragment>
    <CardContent id="connect-card" align="center">
      <Typography
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
      ></Typography>
      <Typography variant="h5" component="div">
        Let's work together!
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
      <Typography variant="body2">
        If you're interested in working together or just want to say hi, feel
        free to reach out to me through the below links. I look forward to
        hearing from you :)
      </Typography>
      {/* <CardActions id="connect-card"> */}
      <br />
      <a href="mailto:aneeshsharmachd@gmail.com">
        <Button size="small" variant="contained">
          <EmailIcon /> &nbsp; Gmail
        </Button>{" "}
      </a>{" "}
      &nbsp;
      <a href="https://github.com/aneesh-02">
        <Button size="small" variant="contained">
          <GitHubIcon /> &nbsp; GitHub
        </Button>{" "}
      </a>
      &nbsp;
      <a href="https://www.linkedin.com/in/aneesh-sharma-02/">
        <Button size="small" variant="contained">
          <LinkedInIcon /> &nbsp; LinkedIn
        </Button>{" "}
      </a>
      &nbsp;
      <a href="https://github.com/aneesh-02/Resume/blob/main/AneeshSharmaResume.pdf">
        <Button size="small" variant="contained">
          <ArticleIcon /> &nbsp; Resume
        </Button>
      </a>
      {/* </CardActions> */}
      <br /> <br />
      <div>
        <div id="arrow-icon" onClick={scrollToTop}>
          <KeyboardArrowUpIcon />
        </div>
      </div>
    </CardContent>
  </React.Fragment>
);

export default function ContactCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
