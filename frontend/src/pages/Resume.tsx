import { Box } from '@mui/material';
import { NavContext } from '../components/NavContext';
import { useContext } from 'react';

export default function ResumePage() {
  const navHeight = useContext(NavContext);
  console.log(navHeight);
  return (
    <Box
      sx={{
        marginTop: `${navHeight}px`,
        width: '100%',
        height: `calc(100vh - ${navHeight}px)`,
      }}
    >
      <object data="cv.pdf" type="application/pdf" width="100%" height="100%">
        Your browser does not support PDFs. Please download the file
        <a href="cv.pdf">here</a>
      </object>
    </Box>
  );
}
