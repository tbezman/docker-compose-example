import * as React from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import { Environment } from 'relay-runtime'
import { RecordMap } from 'relay-runtime/lib/store/RelayStoreTypes'
import { createRelayEnvironment } from '../utils/RelayEnvironment'

type AppProps = {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Initialize the relay environment in state so its guaranteed not to change
  const [relayEnvironment] = React.useState<Environment>(() =>
    createRelayEnvironment(pageProps.relayRecords as RecordMap)
  )

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  )
}

export default App
