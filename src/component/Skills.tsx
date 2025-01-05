import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'
import { useInView } from 'react-intersection-observer'

const containerStyle = {
  display: 'flex',
  gap: '10px',
}

const itemStyle = {
  padding: '10px',
}

const skillFullmark = 5

function RadarSkillFramework() {
  const skills = [
    {
      subject: 'Linux',
      skillScore: 3,
      fullMark: skillFullmark,
    },
    {
      subject: 'IBM - DB2',
      skillScore: 3,
      fullMark: skillFullmark,
    },
    {
      subject: 'AWS',
      skillScore: 1,
      fullMark: skillFullmark,
    },
    {
      subject: 'Git',
      skillScore: 3,
      fullMark: skillFullmark,
    },
    {
      subject: 'IBM - MQ',
      skillScore: 2,
      fullMark: skillFullmark,
    },
    {
      subject: 'Snowflake',
      skillScore: 1,
      fullMark: skillFullmark,
    },
  ]
  return (
    <Box>
      <RadarChart height={200} width={400} data={skills}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis
          angle={90}
          domain={[0, skillFullmark]}
          tickCount={skillFullmark + 1}
        />
        <Radar
          dataKey="skillScore"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
      </RadarChart>
    </Box>
  )
}

function RadarSkillLanguage() {
  const skills = [
    {
      subject: 'C++',
      skillScore: 2,
      fullMark: skillFullmark,
    },
    {
      subject: 'Java',
      skillScore: 3,
      fullMark: skillFullmark,
    },
    {
      subject: 'Python',
      skillScore: 4,
      fullMark: skillFullmark,
    },
    {
      subject: 'SQL',
      skillScore: 3,
      fullMark: skillFullmark,
    },
    {
      subject: 'React',
      skillScore: 2,
      fullMark: skillFullmark,
    },
    {
      subject: 'RubyOnRails',
      skillScore: 1,
      fullMark: skillFullmark,
    },
  ]
  return (
    <Box>
      <RadarChart height={200} width={400} data={skills}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis
          angle={90}
          domain={[0, skillFullmark]}
          tickCount={skillFullmark + 1}
        />
        <Radar
          dataKey="skillScore"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
      </RadarChart>
    </Box>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({
    rootMargin: '100px',
    triggerOnce: true,
  })
  return (
    <Box ref={ref} height={300}>
      {inView && (
        <Box textAlign="center">
          <Typography variant="h4" sx={{ mb: 2 }}>
            {'Skills'}
          </Typography>
          <Box style={containerStyle} justifyContent="center">
            <Box style={itemStyle}>
              <RadarSkillLanguage />
            </Box>
            <Box style={itemStyle}>
              <RadarSkillFramework />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}
