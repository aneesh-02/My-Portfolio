import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Zoom from "@mui/material/Zoom";

export default function HomeButtons() {
  return (
    <Card id="home-buttons">
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          // spacing={2}
        >
          <a href="mailto:aneeshsharmachd@gmail.com">
            <Fab color="primary" aria-label="add" size="small">
              <Tooltip
                title="Email"
                placement="right"
                TransitionComponent={Zoom}
                arrow
              >
                <EmailIcon />
              </Tooltip>
            </Fab>
          </a>
          <br />
          <a href="https://github.com/aneesh-02">
            <Fab color="primary" aria-label="add" size="small">
              <Tooltip
                title="GitHub"
                placement="right"
                TransitionComponent={Zoom}
                arrow
              >
                <GitHubIcon />
              </Tooltip>
            </Fab>
          </a>
          <br />
          <a href="https://www.linkedin.com/in/aneesh-sharma-02/">
            <Fab color="primary" aria-label="add" size="small">
              <Tooltip
                title="LinkedIn"
                placement="right"
                TransitionComponent={Zoom}
                arrow
              >
                <LinkedInIcon />
              </Tooltip>
            </Fab>
          </a>
        </ButtonGroup>
      </Box>
    </Card>
  );
}
