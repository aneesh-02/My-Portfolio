import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Header(props) {
  return (
    <Container maxWidth="xl" id="header-container">
      <Typography color="primary" variant="h4" align="center">
        {props.text}
      </Typography>
    </Container>
  );
}
