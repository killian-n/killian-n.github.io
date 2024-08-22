import {
  Typography,
  Box,
  Stack,
  styled,
  Card,
  CardMedia,
  Paper,
  CardContent,
} from '@mui/material';

const IntroCard = styled(Card)({ overflow: 'hidden' });

const IntroCardMedia = styled(CardMedia)({
  margin: '10px',
  maxWidth: '200px',
  minHeight: '100px',
  float: 'left',
  shapeOutside: 'margin-box',
});

const IntroPaper = styled(Paper)({
  maxWidth: '500px',
  maxHeight: 'fit-content',
});

const BannerCard = styled(Card)({});

const BannerCardMedia = styled(CardMedia)({});

function HomePage() {
  return (
    <>
      <Stack
        sx={{ backgroundColor: 'green', height: '100vh' }}
        direction="column"
      >
        <Box
          sx={{
            flex: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url("banner.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        >
          <IntroPaper>
            <IntroCard>
              {/* <img id="profile-pic" src="mugshot.jpg"></img> */}
              <IntroCardMedia
                component="img"
                image="mugshot.jpg"
              ></IntroCardMedia>
              <Typography paragraph sx={{ margin: '5px' }}>
                This is the current speed at which i can type it is very slow
                but there was a time where i could type very quickly but i keep
                pressing y with the wrong hand now and it is very annoying. I
                will have to get an AI to auto generate some text for me instead
                of typing out a shit tonne like this rn. I need to add alot more
                text to this in order to make it actually useful for debugging.
              </Typography>
            </IntroCard>
          </IntroPaper>
        </Box>
        <Box sx={{ backgroundColor: 'blue', flex: 1 }}>
          <Typography></Typography>
        </Box>
      </Stack>
    </>
  );
}

export default HomePage;
