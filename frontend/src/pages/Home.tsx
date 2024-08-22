import { Typography, Box, Grid } from '@mui/material';
import ParticleBackground from '../components/ParticleBackground';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { styled } from '@mui/material';
import { IconButton } from '@mui/material';
import { useRef } from 'react';
import InterestBox from '../components/InterestBox';
import AssistantIcon from '@mui/icons-material/Assistant';

const TitleTypography = styled(Typography)({
  color: 'white',
  fontFamily: 'Montserrat',
  cursor: 'default',
});

const DownArrow = styled(IconButton)({
  position: 'absolute',
  bottom: '5%',
  left: '50%',
  transform: 'translateX(-50%)',
});

const interestsRef = useRef<HTMLElement | null>(null);

function HomePage() {
  const handleArrow = () => {
    if (interestsRef.current) {
      interestsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box sx={{ minWidth: '100vh' }}>
        <ParticleBackground></ParticleBackground>
        <Box sx={{ position: 'absolute', left: '6%', top: '35%', zIndex: 2 }}>
          <TitleTypography variant="h3">Killian Nolan</TitleTypography>
          <TitleTypography variant="h4">Data Science Graduate</TitleTypography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '5%',
            left: '50%',
            right: '50%',
            zIndex: 2,
          }}
        ></Box>
        <DownArrow onClick={handleArrow}>
          <ExpandMoreRoundedIcon fontSize="large"></ExpandMoreRoundedIcon>
        </DownArrow>
        <Box
          sx={{
            minWidth: '100vh',
            justifyContent: 'center',
          }}
          ref={interestsRef}
        >
          <Typography
            sx={{ marginInline: 'auto', maxWidth: 'fit-content' }}
            variant="h3"
          >
            Interests
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{ justifyContent: 'center', marginTop: '30px' }}
          >
            <Grid item xs={12} md={6} lg={4}>
              <InterestBox
                title="AI"
                desc="i like this ajaljgk lkadj gfk jgkfds g. sdfgklsjdfg .dsfg .sdfg sdfgkjdfgkfjgkfj gsdfkjg ."
                icon={
                  <AssistantIcon sx={{ marginInline: 'auto' }}></AssistantIcon>
                }
              ></InterestBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <InterestBox
                title="AI"
                desc="i like this ajaljgk lkadj gfk jgkfds g. sdfgklsjdfg .dsfg .sdfg sdfgkjdfgkfjgkfj gsdfkjg ."
                icon={
                  <AssistantIcon sx={{ marginInline: 'auto' }}></AssistantIcon>
                }
              ></InterestBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <InterestBox
                title="AI"
                desc="i like this ajaljgk lkadj gfk jgkfds g. sdfgklsjdfg .dsfg .sdfg sdfgkjdfgkfjgkfj gsdfkjg ."
                icon={
                  <AssistantIcon sx={{ marginInline: 'auto' }}></AssistantIcon>
                }
              ></InterestBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <InterestBox
                title="AI"
                desc="i like this ajaljgk lkadj gfk jgkfds g. sdfgklsjdfg .dsfg .sdfg sdfgkjdfgkfjgkfj gsdfkjg ."
                icon={
                  <AssistantIcon sx={{ marginInline: 'auto' }}></AssistantIcon>
                }
              ></InterestBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <InterestBox
                title="AI"
                desc="i like this ajaljgk lkadj gfk jgkfds g. sdfgklsjdfg .dsfg .sdfg sdfgkjdfgkfjgkfj gsdfkjg ."
                icon={
                  <AssistantIcon sx={{ marginInline: 'auto' }}></AssistantIcon>
                }
              ></InterestBox>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
