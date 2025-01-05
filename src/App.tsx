import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Landing from './component/Landing'
import AboutMe from './component/AboutMe'
import Skills from './component/Skills'

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright ©Yosuke Ozawa '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Landing />
      <AboutMe />
      <Skills />
      <Copyright />
    </Container>
  )
}
