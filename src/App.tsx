import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Landing from './component/Landing'
import AboutMe from './component/AboutMe'
import Skills from './component/Skills'
import Links from './component/Links'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

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
  const landingRef = React.useRef<HTMLDivElement | null>(null)
  const aboutMeRef = React.useRef<HTMLDivElement | null>(null)
  const skillsRef = React.useRef<HTMLDivElement | null>(null)
  const linksRef = React.useRef<HTMLDivElement | null>(null)

  const handleClickLandingButton = () => {
    if (!landingRef.current) return
    landingRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClickAboutMeButton = () => {
    if (!aboutMeRef.current) return
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClickSkillsButton = () => {
    if (!skillsRef.current) return
    skillsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClickLinksButton = () => {
    if (!linksRef.current) return
    linksRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const MyAppBar = () => {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
          </Box>
          <Button color="inherit" onClick={handleClickLandingButton}>
            Home
          </Button>
          <Button color="inherit" onClick={handleClickAboutMeButton}>
            AboutMe
          </Button>
          <Button color="inherit" onClick={handleClickSkillsButton}>
            Skills
          </Button>
          <Button color="inherit" onClick={handleClickLinksButton}>
            Links
          </Button>
        </Toolbar>
      </AppBar>
    )
  }

  return (
    <Container>
      <MyAppBar />
      <Container maxWidth="sm">
        <Box ref={landingRef}>
          <Landing />
        </Box>
        <Box ref={aboutMeRef}>
          <AboutMe />
        </Box>
        <Box ref={skillsRef}>
          <Skills />
        </Box>
        <Box ref={linksRef}>
          <Links />
        </Box>
      </Container>
      <Copyright />
    </Container>
  )
}
