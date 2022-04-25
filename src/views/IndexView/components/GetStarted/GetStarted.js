import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';

// import { Link } from 'react-router-dom';

// import Button from '@mui/material/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

const GetStarted = () => {
  // const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });

  return (
    <Box>
      <Typography
        variant="h4"
        color="text.primary"
        align={'center'}
        gutterBottom
        marginLeft={4}
        sx={{
          fontWeight: 700,
        }}
      >
        Lets connect!
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={4}
        />
        <IconButton href="https://www.linkedin.com/in/kahlil-sassa-b94676173/">
          <LinkedInIcon sx={{ fontSize: '48px', justifyContent: 'Center' }} />
        </IconButton>
        <IconButton href="https://git.generalassemb.ly/kahlilsassa-1">
          <GitHubIcon sx={{ fontSize: '48px', justifyContent: 'Center' }} />
        </IconButton>
        <IconButton href="mailto:kahlilsassa@gmail.com">
          <EmailIcon sx={{ fontSize: '48px', justifyContent: 'Center' }} />
        </IconButton>
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        align={'center'}
      ></Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent={'center'}
        marginTop={4}
      >
        {/* <Button
          component={'a'}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          href={'/home'}
        >
          View pages
        </Button> */}
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          {/* <Button
            component={'a'}
            href={'/docs/introduction'}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
            Documentation
          </Button> */}
          {/* <IconButton href="https://www.linkedin.com/in/kahlil-sassa-b94676173/">
            <LinkedInIcon sx={{ fontSize: '48px', justifyContent: 'Center' }} />
          </IconButton>
          <IconButton href="https://git.generalassemb.ly/kahlilsassa-1">
            <GitHubIcon sx={{ fontSize: '48px', justifyContent: 'Center' }} />
          </IconButton>
          <IconButton href="mailto:kahlilsassa@gmail.com">
            <EmailIcon sx={{ fontSize: '48px', justifyContent: 'Center' }} />
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  );
};

export default GetStarted;
