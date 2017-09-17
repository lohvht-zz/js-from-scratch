// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheets from 'react-jss'

import { APP_NAME } from '../../config'

const styles = {
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'blue',
    },
  },
  buttonTest: {
    margin: 60,
  },
  buttonTestTwo: {
    color: 'teal',
  },
  specialButton: {
    composes: ['$buttonTest', '$buttonTestTwo'],
    backgroundColor: 'limegreen',
  },
}

const HomePage = ({ classes }: { classes: Object }) =>
  (<div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <h1>{APP_NAME}</h1>
    <div>
      <h3>JSS</h3>
      <p className={classes.hoverMe}>Hover on me!</p>
      <p className={classes.resizeMe}>Resize the window!</p>
      <button className={classes.specialButton}>Composition</button>
    </div>
  </div>)

export default injectSheets(styles)(HomePage)
