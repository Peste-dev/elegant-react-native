import React from 'react'
import Netwrok from 'network'
import Navigator from 'routes'

const App = () => (
  <Netwrok.NetworkProvider>
    <Navigator />
  </Netwrok.NetworkProvider>
)

export default App
