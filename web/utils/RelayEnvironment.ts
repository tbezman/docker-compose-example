import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { RecordMap } from 'relay-runtime/lib/store/RelayStoreTypes'

const getFetchUrl = (): string => {
  if (process.browser) {
    // Connect to the service via domain name when on the client
    return 'http://api.todo.com/query'
  } else {
    // Connect directly to the service in docker when on the server
    return 'http://api:8080/query'
  }
}

async function fetchGraphQL(params, variables) {
  const response = await fetch(getFetchUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })

  return await response.json()
}

export const serializeRelayEnvironment = (environment: Environment) => {
  return environment.getStore().getSource().toJSON()
}

export const createRelayEnvironment = (records: RecordMap): Environment => {
  return new Environment({
    store: new Store(new RecordSource(records)),
    network: Network.create(fetchGraphQL),
  })
}
