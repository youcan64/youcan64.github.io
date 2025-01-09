import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SvgIcon } from '@mui/material';

const containerStyle = {
  display: 'flex',
  gap: '10px',
}

const itemStyle = {
  padding: '10px',
}

export default function Links() {
  return (
    <Box textAlign="center">
      <Toolbar />
      <Box style={containerStyle} justifyContent="center">
        <Box style={itemStyle}>
          <Link href="https://github.com/youcan64" target="_blank" rel="noopener noreferrer">
                <SvgIcon component={GitHubIcon}/>
            </Link>
        </Box>
        <Box style={itemStyle}>
          <Link href="https://www.linkedin.com/in/yosuke-ozawa-940985278/" target="_blank" rel="noopener noreferrer">
                <SvgIcon component={LinkedInIcon}/>
            </Link>
        </Box>
      </Box>
    </Box>
  )
}
