import { Typography, Box, Stack, styled, Card, CardMedia } from '@mui/material';
import { useContext } from 'react';
import { NavContext } from '../components/NavContext';

const BannerCard = styled(Card)({
  height: '100%',
});

const BannerCardMedia = styled(CardMedia)({
  height: '100%',
});

function ProjectsPage() {
  const navHeight = useContext(NavContext);
  return (
    <Box sx={{ marginTop: `${navHeight}px` }}>
      <Stack
        sx={{ backgroundColor: 'green', height: '100vh' }}
        direction="column"
      >
        <Box sx={{ backgroundColor: 'red', flex: 1 }}>
          <BannerCard>
            <BannerCardMedia image="banner.jpg"></BannerCardMedia>
          </BannerCard>
        </Box>
        <Box sx={{ backgroundColor: 'blue', flex: 1 }}>
          <Typography>PROJECTS BROWSER PAGE</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default ProjectsPage;
