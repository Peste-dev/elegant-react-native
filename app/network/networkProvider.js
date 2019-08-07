import * as React from 'react'
import PropTypes from 'prop-types'
import NetInfo from '@react-native-community/netinfo'

export const NetworkContext = React.createContext({ isConnected: true })

export const NetworkProvider = ({ children }) => {
  const [isOnline, setIsOnine] = React.useState(true)

  const changeNetwork = onlineStatus => {
    setIsOnine(onlineStatus)
  }

  React.useEffect(() => {
    NetInfo.isConnected.addEventListener('connectionChange', changeNetwork)
  }, [])

  return <NetworkContext.Provider value={isOnline}>{children}</NetworkContext.Provider>
}

export const useNetwork = () => {
  const context = React.useContext(NetworkContext)
  if (context === undefined) {
    throw new Error('useNetwork must be used within a NetworkProvider')
  }
  return context
}

NetworkProvider.propTypes = { children: PropTypes.node.isRequired }
