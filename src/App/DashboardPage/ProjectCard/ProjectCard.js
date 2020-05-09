import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import SwipePictures from "../../UI/SwipePictures/SwipePictures";

import "./ProjectCard.scss";

const ProjectCard = () => (
  <div className="project-card">
    <Card classes={{ root: "single-card" }}>
      <SwipePictures />
      {/* <CardActionArea> */}
      {/* <CardMedia
          classes={{ root: "card-image" }}
          image="./assets/shaver-test.jpg"
          title="Contemplative Reptile"
        /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Project Name
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  </div>
);

export default ProjectCard;
