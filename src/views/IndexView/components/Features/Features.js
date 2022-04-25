/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';

// import { Document } from 'react-pdf';

const mock = [
  // {
  //   title: 420,
  //   subtitle: '420 +  hours of coding expereince in a project based setting.',
  //   suffix: '+',
  // },
  // {
  //   title: 45,
  //   subtitle:
  //     '45 + landing and supported pages to Build a professional website.',
  //   suffix: '+',
  // },
  // {
  //   title: 99,
  //   subtitle: '99% of our customers rated 5-star our themes over 5 years.',
  //   suffix: '%',
  // },
];

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              Lets build something great together!
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Whether you're creating an e-commerce store, designing features
              for a social media app, or just wanted to update your own personal
              website. I am confident I will be able to cater to your developer
              needs.
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Divider />
            <br />
            <br />
            <br />

            <Typography
              variant="h4"
              color="text.primary"
              align={'center'}
              gutterBottom
              marginLeft={1}
              sx={{
                fontWeight: 700,
              }}
            >
              Resume{' '}
            </Typography>
            <br />
            <br />

            <Box component={Card} boxShadow={4} height={1} width={1}>
              <a href="https://docs.google.com/document/d/1OvrLDbMHffbdEqkxp2nh8ogZOjhpsLqlQWHKJp-6cVA/edit?usp=sharing">
                <Box
                  component={CardMedia}
                  height={1}
                  width={1}
                  minHeight={800}
                  image="/Kahlil-Sassa-2022-Resume.png"
                />
              </a>
            </Box>

            {/* <Document
              file={'/react-scripts/src/Kahlil Sassa Resume 2022.pdf'}
            /> */}
          </Box>

          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={'primary'} gutterBottom>
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <CountUp
                      duration={2}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={800}
              image="/cpu.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
