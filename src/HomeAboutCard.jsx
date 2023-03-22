import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import resume from "./Images/resume.pdf";

const card = (
  <React.Fragment>
    <CardContent id="AboutCard">
      <Typography variant="h3" gutterBottom>
        Hi, I'm Aneesh!
      </Typography>
      <Typography variant="h4" component="div">
        FULLSTACK DEVELOPER
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
      <Typography variant="body1">
        A highly skilled and motivated Computer Science Graduate with
        professional experience in Software Development, Analyses and Testing.
        <br />
        Equipped with a solid foundation in software engineering and a range of
        programming languages and technologies.
      </Typography>

      <CardActions>
        <br />
        <br />
        <a href="https://github.com/aneesh-02/Resume/blob/main/AneeshSharmaResume.pdf">
          <Button size="medium" variant="contained">
            My Resume
          </Button>
        </a>
      </CardActions>
    </CardContent>
  </React.Fragment>
);

export default function HomeAboutCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        {card}
      </Card>
    </Box>
  );
}
