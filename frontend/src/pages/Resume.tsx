import { Box, Typography } from '@mui/material';
import { NavContext } from '../components/NavContext';
import { useContext } from 'react';

export default function ResumePage() {
  const navHeight = useContext(NavContext);
  console.log(navHeight);
  return (
    <Box sx={{ marginTop: `${navHeight}px` }}>
      <Typography>Post Resume on this page</Typography>
    </Box>
  );
}
