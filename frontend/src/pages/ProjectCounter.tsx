import NavBar from '../components/NavBar';
import React from 'react';
import { Typography, Button, Box } from '@mui/material';

function ProjectCounterPage() {
  const [projectCount, setProjectCount] = React.useState(0);
  return (
    <>
      <NavBar></NavBar>
      <Typography>
        We have completed {projectCount}{' '}
        {projectCount > 1 || projectCount == 0 ? 'projects' : 'project'} so far!
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          variant="outlined"
          onClick={() => {
            setProjectCount(projectCount + 1);
          }}
        >
          Click here
        </Button>
      </Box>
    </>
  );
}

export default ProjectCounterPage;
