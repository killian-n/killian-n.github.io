import React, { useContext } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { NavContext } from '../components/NavContext';

function ProjectCounterPage() {
  const [projectCount, setProjectCount] = React.useState(0);
  const navHeight = useContext(NavContext);
  return (
    <Box sx={{ marginTop: `${navHeight}px` }}>
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
    </Box>
  );
}

export default ProjectCounterPage;
