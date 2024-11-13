import { Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { forwardRef } from 'react';
import ProjectCardProps from '../types/ProjectCardProps';

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  function ProjectCard(props, ref) {
    return (
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
          marginInline: 'auto',
          maxWidth: 'fit-content',
          minWidth: '30%',
          margin: '10px',
          textAlign: 'center',
        }}
        ref={ref}
      >
        <CardMedia
          sx={{
            maxWidth: '100%', // Ensure it takes the full width of the card
            height: 'auto', // Adjust height if needed to keep aspect ratio
            marginTop: '10px',
            marginInline: 'auto',
          }}
          image={props.img}
          component="img"
        />
        <CardContent
          sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          {props.children}
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}></CardActions>
      </Card>
    );
  },
);

export default ProjectCard;
