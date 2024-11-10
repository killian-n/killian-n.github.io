import { Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { forwardRef } from 'react';
import ProjectCardProps from '../types/ProjectCardProps';

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  function ProjectCard(props, ref) {
    return (
      <Card
        sx={{
          backgroundColor: 'red',
          marginInline: 'auto',
          maxWidth: 'fit-content',
          minWidth: '30%',
        }}
        ref={ref}
      >
        <CardMedia
          sx={{ maxWidth: '250px', marginTop: '10px', marginInline: 'auto' }}
          image={props.img}
          component="img"
        ></CardMedia>
        <CardContent>{props.children}</CardContent>
        <CardActions></CardActions>
      </Card>
    );
  },
);

export default ProjectCard;
