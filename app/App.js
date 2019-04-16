import React from 'react'
import Navigator from './routes'

function App() {
  return (
    <Navigator
      ref={nav => {
        this.navigator = nav
      }}
    />
  )
}

export default App
