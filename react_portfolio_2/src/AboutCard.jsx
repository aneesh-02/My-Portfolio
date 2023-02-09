import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Hi, I'm Aneesh!
      </Typography>
      <Typography variant="h5" component="div">
        SOFTWARE DEVELOPER
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
      <Typography variant="body2">
        A highly skilled and motivated Computer Science Graduate with
        professional experience in Software Analyses and Testing.
        <br />
        Equipped with a solid foundation in software engineering and a range of
        programming languages and technologies.
      </Typography>  
      <CardActions>
      <br/>
        <Button size="small" variant="contained">
          My Resume
        </Button>
      </CardActions>
    </CardContent>
  </React.Fragment>
);

export default function AboutCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
