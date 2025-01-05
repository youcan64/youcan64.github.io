import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

export default function Landing() {
  return (
    <Box textAlign="center">
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        {"Welcome to Yosuke's page!"}
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 2 }}>
        {'Software Engineer | Java Developer | Problem Solver'}
      </Typography>
      <Link href="https://youcan64.github.io/">{'Get in touch'}</Link>
    </Box>
  )
}
