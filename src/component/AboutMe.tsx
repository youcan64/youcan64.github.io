import { Typography, Box, Toolbar } from '@mui/material';

export default function AboutMe() {
  return (
    <Box textAlign="center">
      <Toolbar />
      <Typography variant="h4" sx={{ mb: 2 }}>
        {'About me'}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {
          'I am a dedicated software engineer with'} {new Date().getFullYear() - 2021}{'+ years of experience. '
        }
        <br />
        {
          'With a strong foundation in Java and a passion for solving challenging problems, I strive to create impactful and scalable software.'
        }
      </Typography>
      <br />
    </Box>
  )
}
