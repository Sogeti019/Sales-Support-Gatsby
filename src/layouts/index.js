import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Container from '@material-ui/core/Container';
import Navigation from '../components/navigation'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../theme'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="false" style={{ padding: '0' }}>
          <Navigation />
          {children()}
        </Container>
      </ThemeProvider>
    )
  }
}

export default Template
