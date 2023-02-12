import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function SkillCard(props) {
  return (
    <Card id="skill-card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img" 
          height="140"
          image={props.image}
          alt="skill icon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p class="experience-description text-justify">
              {" "}
              {props.description}{" "}
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
