import { Button } from '@mui/material';
import SocialProps from '../types/SocialProps';

export default function SocialButton(props: SocialProps) {
  return (
    <Button
      variant="contained"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      startIcon={
        <img
          src={props.icon}
          alt={props.name}
          style={{ width: 24, height: 24 }}
        />
      }
      sx={{
        padding: 0,
        minWidth: 0,
        backgroundColor: 'transparent',
        boxShadow: 'none', // Remove shadow
        border: 'none', // Remove outline
        '&:hover': {
          backgroundColor: 'transparent',
          boxShadow: 'none', // Prevent shadow on hover
        },
        '&:focus': {
          outline: 'none', // Remove focus outline
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none', // Remove shadow when active
        },
      }}
    ></Button>
  );
}
