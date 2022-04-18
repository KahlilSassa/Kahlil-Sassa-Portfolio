import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Divider,
} from '@mui/material';
import {
  GetStarted,
  Features,
  // QuickStart,
  Services,
  Hero,
} from './components';

const mock = [
  {
    image: '/Screen Shot 2022-04-12 at 6.04.46 PM.png',
    description: 'A luxury e-commerce store',
    title: 'Represent Clothing Store',
    url: 'https://ancient-sands-31685.herokuapp.com/',
  },
  {
    image: '/Screen Shot 2022-04-12 at 6.06.59 PM.png',
    description: 'A mobile app aiming to connect music lovers.',
    title: 'Muse',
    url: 'https://muse-dev.herokuapp.com',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img12.jpg',
    description: 'A social app that allows users to connect with peers.',
    title: 'Twitter',
    url: 'https://twitclonefrontend.herokuapp.com',
  },
];

const IndexView = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Hero />

        <Container>
          <Services />
        </Container>

        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, ${alpha(
              theme.palette.background.paper,
              0,
            )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
            backgroundRepeat: 'repeat-x',
            position: 'relative',
          }}
        >
          <Container maxWidth={600}>{/* <QuickStart /> */}</Container>
          <Container>
            <Features />
          </Container>
          {/* <Benefits /> */}
          {/* <PortfolioGrid /> */}

          <br />
          <br />
          <br />
          <Divider />

          <Container>
            <Box>
              <Grid container spacing={8}>
                {mock.map((item, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Box
                      component={'a'}
                      href={item.url}
                      display={'block'}
                      width={1}
                      height={1}
                      justifyContent={'center'}
                      sx={{
                        textDecoration: 'none',
                        transition: 'all .2s ease-in-out',
                        '&:hover': {
                          transform: `translateY(-${theme.spacing(1 / 2)})`,
                        },
                      }}
                    >
                      <Box
                        component={Card}
                        width={1}
                        height={1}
                        display={'flex'}
                        flexDirection={'column'}
                      >
                        <CardMedia
                          image={item.image}
                          title={item.title}
                          sx={{
                            height: { xs: 340, md: 400 },
                            filter:
                              theme.palette.mode === 'dark'
                                ? 'brightness(0.7)'
                                : 'none',
                          }}
                        />
                        <Box component={CardContent}>
                          <Typography
                            variant={'h6'}
                            fontWeight={700}
                            gutterBottom
                          >
                            {item.title}
                          </Typography>
                          <Typography variant={'body2'} color="text.secondary">
                            {item.description}
                          </Typography>
                        </Box>
                        <Box flexGrow={1} />
                        <Box
                          component={CardActions}
                          justifyContent={'flex-start'}
                        >
                          <Button
                            size="large"
                            endIcon={
                              <svg
                                width={16}
                                height={16}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            }
                          >
                            Learn more
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>

          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            sx={{
              width: '100%',
              marginBottom: theme.spacing(-1),
            }}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </Box>
        </Box>
        <Container>
          <GetStarted />
        </Container>
      </Main>
    </Box>
  );
};

export default IndexView;
