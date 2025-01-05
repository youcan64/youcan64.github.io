import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function AboutMe() {
  return (
    <Box textAlign="center">
      <Typography variant="h4" sx={{ mb: 2 }}>
        {'About me'}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {
          'I am a dedicated software engineer with 4+ years of experience in designing and implementing solutions in the financial sector. '
        }
        <br />
        {
          'Currently at Goldman Sachs, I specialize in building robust settlement systems that enhance operational workflows. '
        }
        <br />
        {
          'With a strong foundation in Java and a passion for solving challenging problems, I strive to create impactful and scalable software.'
        }
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  )
}
