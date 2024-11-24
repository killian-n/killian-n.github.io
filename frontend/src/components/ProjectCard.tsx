import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from '@mui/material';
import { forwardRef } from 'react';
import ProjectCardProps from '../types/ProjectCardProps';

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  function ProjectCard(props, ref) {
    return (
      <Card
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          marginInline: 'auto',
          maxWidth: 'fit-content',
          minWidth: '30%',
          margin: '10px',
        }}
        ref={ref}
      >
        <CardMedia
          sx={{
            maxWidth: '95%', // Ensure it takes the full width of the card
            height: 'auto', // Adjust height if needed to keep aspect ratio
            marginTop: '2.5%',
          }}
          image={props.img}
          component="img"
        />
        <CardContent sx={{ width: '100%' }}>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', fontFamily: 'Montserrat' }}
          >
            {props.title}
          </Typography>
          <Typography sx={{ marginInline: '10px' }}>{props.desc}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}></CardActions>
      </Card>
    );
  },
);

export default ProjectCard;
