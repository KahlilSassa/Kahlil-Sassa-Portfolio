/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              My story
            </Typography>
            <Typography component={'p'}>
              My focus has always been about impacting the world in a way I
              could make a sizable difference within my community.
              <br />
              <br />
              Curating software allows me to do that.
              <br />
              <br />I started my web development journey mid 2021. While
              pursuing my masters in I/O psychology at the Chicago school of
              Professional Psychology, I decided that I was in need of a career
              that not only allowed me to be creative but use real world
              applications that would impact my community. 
              <br/>
              <br/>
              With this in mind, I
              quickly scouted opportunities within in tech. I then came across
              General Assembly after hearing raving reviews from peers who have
              sought a career change. I decided to take a leap of faith and
              enrolled in General Assembly's Flex Program. Within months I was
              able to develop technical skills that allowed me to create web applications, something previously I never thought was possible.
              <br />
              <br />

              When I am not hacking away, I am walking down the runway and creating content.

              <br />
              <br />

              Thank you for visiting and I look forward to the opportunity to connect with you soon!
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                '/Kahlil 07 2022.jpg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
