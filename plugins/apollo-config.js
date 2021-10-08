import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import fragmentTypes from '~/fragmentTypes.json'
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: fragmentTypes,
})

export default function (context) {
  let config = {}
  if (process.client) {
    config = {
      httpPrefix: process.env.estimatingClientSecure ? 'https' : 'http',
      wsPrefix: process.env.estimatingClientSecure ? 'wss' : 'ws',
      hostname: process.env.estimatingClientHost || window.location.hostname,
      port: process.env.estimatingClientPort || window.location.port,
      url: process.env.estimatingClientUrl || '/graphql',
    }
  } else {
    config = {
      httpPrefix: process.env.estimatingServerSecure ? 'https' : 'http',
      wsPrefix: process.env.estimatingServerSecure ? 'wss' : 'ws',
      hostname: process.env.estimatingServerHost || 'localhost',
      port: process.env.estimatingServerPort || 4000,
      url: process.env.estimatingServerUrl || '/graphql',
    }
  }
  const portString = config.port ? `:${config.port}` : ``
  console.log(`${config.httpPrefix}://${config.hostname}${portString}${config.url}`)
  return {
    httpEndpoint: `${config.httpPrefix}://${config.hostname}${portString}${config.url}`,
    wsEndpoint: `${config.wsPrefix}://${config.hostname}${portString}${config.url}`,
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}