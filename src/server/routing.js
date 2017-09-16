// @flow

import {
  homePage,
  helloPage,
  helloAsyncPage,
  helloEndpoint,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  helloEndpointRoute,
} from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    console.log('req.url', req.url)
    res.send(renderApp(req.url, homePage()))
  })

  app.get(HELLO_PAGE_ROUTE, (req, res) => {
    console.log('req.url', req.url)
    const renderedHelloPage = renderApp(req.url, helloPage())
    res.send(renderedHelloPage)
    console.log(renderedHelloPage)
  })

  app.get(HELLO_ASYNC_PAGE_ROUTE, (req, res) => {
    console.log('req.url', req.url)
    res.send(renderApp(req.url, helloAsyncPage()))
  })

  app.get(helloEndpointRoute(), (req, res) => {
    console.log('req.url', req.url)
    res.json(helloEndpoint(req.params.num))
  })

  app.get('/500', () => {
    throw Error('Fake Internal Server Error')
  })

  // Alternatively we can make * route back to a default page (i.e. home page)
  app.get('*', (req, res) => {
    console.log('req.url', req.url)
    res.status(404).send(renderApp(req.url))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
