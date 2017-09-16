// @flow

import React from 'react'
import Helmet from 'react-helmet'

import HelloButton from '../../container/hello-button'
import Message from '../../container/message'
import { STATIC_PATH } from '../../config'

const title = 'Hello Page'

const HelloPage = () =>
  (<div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <h1>Here is a cute image of kitten!</h1>
    <img
      src={`${STATIC_PATH}/images/cute-kittens.jpg`}
      alt="Cute Kitten"
    />
    <Message />
    <HelloButton />
  </div>)

export default HelloPage
