import { Typography, useMediaQuery, useTheme, Box, Toolbar } from '@mui/material';

export default function Landing() {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));
  
  function GetWelcome() {
    if (isExtraSmall) {
      return <Box sx={{ mb: 2 }}><Typography variant="h4" align="center" >
      {'Welcome to'}
    </Typography><Typography variant="h4" align="center" >
      {'Yosuke\'s page!'}</Typography></Box>
    } else {
      return <Typography variant="h4" align="center" sx={{ mb: 2 }}>
      {"Welcome to Yosuke's page!"}
    </Typography>
    }

  }

  function GetTitles() {
    if (isExtraSmall) {
      return <Box><Typography variant="body1" align="center" >
      {'Software Engineer'}
    </Typography><Typography variant="body1" align="center" >
      {'Java Developer'}
    </Typography><Typography variant="body1" align="center" >
      {'Problem Solver'}
    </Typography></Box>
    } else {
      return <Typography variant="body1" align="center" sx={{ mb: 2 }}>
      {'Software Engineer | Java Developer | Problem Solver'}
    </Typography>
    }
  }

  return (
    <Box textAlign="center">
      <Toolbar />
      <GetWelcome />
      <GetTitles />
    </Box>
  )
}
