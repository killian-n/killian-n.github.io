import { Typography, Box, Grid, Stack } from '@mui/material';
import ParticleBackground from '../components/ParticleBackground';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { styled } from '@mui/material';
import { IconButton } from '@mui/material';
import { useContext, useRef } from 'react';
import InterestBox from '../components/InterestBox';
import AssistantIcon from '@mui/icons-material/Assistant';
import { NavContext } from '../components/NavContext';
import ProjectCard from '../components/ProjectCard';
import ProjectSlider from '../components/ProjectSlider';
import SocialButton from '../components/SocialButton';
import LinkedInIcon from '../assets/linkedin-brands-solid.svg';
import GitHubIcon from '../assets/github-brands-solid.svg';

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

function HomePage() {
  const interestsRef = useRef<HTMLElement | null>(null);
  const navHeight = useContext(NavContext);
  const handleArrow = (ref: React.MutableRefObject<HTMLElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ marginTop: `${navHeight}px`, width: '100%' }}>
      <ParticleBackground></ParticleBackground>
      <Grid
        container
        spacing={2}
        sx={{ position: 'absolute', top: '35%', zIndex: 2, width: '100%' }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ marginLeft: '6%' }}>
          <TitleTypography variant="h3">Killian Nolan</TitleTypography>
          <TitleTypography variant="h4">Data Science Graduate</TitleTypography>
          <Stack direction="row">
            <SocialButton
              name="LinkedIn"
              link="https://www.linkedin.com/in/killianbriannolan/"
              icon={LinkedInIcon}
            />
            <SocialButton
              name="GitHub"
              link="https://github.com/killian-n"
              icon={GitHubIcon}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} sx={{ marginLeft: '6%' }}>
          <Typography sx={{ color: 'white' }}>
            I'm a recent graduate of Data Science & Analytics from University
            College Cork. I'm looking forward to making an impact on the world
            through my work, I believe that there is so much we could create by
            utilising a data driven methodology. My main fields of interest are
            financial markets, AI developments and silicon. I've spent the last
            year travelling Australia working on myself and on personal projects
            and I am eager to contribute to your company's success.
          </Typography>
        </Grid>
      </Grid>
      <DownArrow onClick={() => handleArrow(interestsRef)}>
        <ExpandMoreRoundedIcon fontSize="large"></ExpandMoreRoundedIcon>
      </DownArrow>
      <Box
        sx={{
          alignContent: 'center',
        }}
        ref={interestsRef}
      >
        <Typography
          sx={{
            marginInline: 'auto',
            paddingTop: '10px',
            maxWidth: 'fit-content',
          }}
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
              title="Machine Learning"
              desc="Used correctly, machine learning offers an intutitive and efficient process of modelling
                deterministic systems in our every day world. I loved studying about the different methods and
                the considerations associated with them and employ machine learning algrothims for prediction in
                many of my projects."
              icon={
                <AssistantIcon sx={{ marginInline: 'auto' }}></AssistantIcon>
              }
            ></InterestBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <InterestBox
              title="Financial Modelling"
              desc="I find the financial system to be incredibly interesting due to the
                sheer number of variables and the complex relationships. Financial modelling is
                inheriently difficult and many models have failed due to unforeseen circumstances.
                I like learning about the different risks and statistical processes models must 
                use in this industry in order to be effective."
              icon={
                <AssistantIcon sx={{ marginInline: 'auto' }}></AssistantIcon>
              }
            ></InterestBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <InterestBox
              title="NLP"
              desc="Natural Language Processing is the field of breaking down, comprehending and generating
                human language by computers. Human language is inheriently difficult due to us employing other
                supplimentary methods of communication besides words. I find this challenging field fasinating to
                work in and closely follow its advancments such as LLMs."
              icon={
                <AssistantIcon sx={{ marginInline: 'auto' }}></AssistantIcon>
              }
            ></InterestBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <InterestBox
              title="Cloud and Distributed Computing"
              desc="Data science utilisies computationaly expensive models
                 and as such must leverage the ability of the cloud and distributed
                  systems to get work done effectively. I like learning about how to deploy and
                   design my own workflows to leverage compute in this way."
              icon={
                <AssistantIcon sx={{ marginInline: 'auto' }}></AssistantIcon>
              }
            ></InterestBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <InterestBox
              title="Data Protection"
              desc="An often overlooked consideration in many of todays online systems. I
                am deeply interested in the methods and design patterns expert security professionals
                use to protect data as I would like to design my projects in this manner to
                protect users data from being misused."
              icon={
                <AssistantIcon sx={{ marginInline: 'auto' }}></AssistantIcon>
              }
            ></InterestBox>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <ProjectSlider className="project-slider" onClick={() => {}} style={{}}>
          <ProjectCard
            title="Web Development"
            img="web_dev.jpg"
            desc="Understanding how information is handled and
            presented on today's web is a critical skill for any developer. 
            I used this project learn about frontend development in React. This project contains
            the code for this very website and utilises many of the coding practices for creating 
            a responsive and interactive website such as hooks, state updating, event-listeners, dynamic resizing and more.
            "
            link="https://github.com/killian-n/killian-n.github.io"
          />
          <ProjectCard
            img="cell_tower.jpg"
            title="Multistage Deep Learning for Throughput Predition"
            desc="Accurate throughput prediction is an important component of many of today's communication systems
                  such as video streaming or the scheduling of large downloads. Today we 
                  heavily utilise wireless communication technologies such as 4G or 5G for such applications,
                  however throughput prediction for wireless systems presents a unique challenge for
                  application designers due to the highly dynamic nature of wireless networks."
            link="https://github.com/killian-n/FYP-Multistage-Throughput-Predictor"
          />
          <ProjectCard
            img="cancer.jpg"
            title="Thyroid Cancer Reoccurance Notebook"
            desc="In this notebook I use a dataset sourced from Kaggle and run through the process of exploring
            a dataset and preparing it for use in prediction models. I use explore topics such as data understanding,
            missing values, feature distributions, feature correlations, class imbalance and more. I utilise this
            analysis to inform model choice then build a cross validation test framework to compare model performance.
            This project is built in python with libraries such as scikit-learn, pandas, PyTorch and numpy."
            link="https://github.com/killian-n/ThyroidCancerPred"
          />
        </ProjectSlider>
      </Box>
    </Box>
  );
}

export default HomePage;
