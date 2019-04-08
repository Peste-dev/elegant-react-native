import React from 'react'

import Navigator from 'routes'

export default class App extends React.Component {
  render() {
    return (
      <Navigator
        ref={nav => {
          this.navigator = nav;
        }}
      />
    )
  }
}
