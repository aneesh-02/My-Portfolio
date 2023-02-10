import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Fab from "@mui/material/Fab";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function HomeButtons() {
  return (
    <Card id="home-buttons">
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          <Fab color="primary" aria-label="add" size="small">
            <EmailIcon />
          </Fab>{" "}
          <br />
          <Fab color="primary" aria-label="add" size="small">
            <GitHubIcon />
          </Fab>
          <br />
          <Fab color="primary" aria-label="add" size="small">
            <LinkedInIcon />
          </Fab>
        </ButtonGroup>
      </Box>
    </Card>
  );
}
