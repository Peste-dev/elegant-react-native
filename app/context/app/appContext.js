import PropTypes from 'prop-types'
import React, { createContext, useContext, useReducer } from 'react'
import initialState from './state'
import reducer from './reducer'

export const AppContext = createContext()

export const AppStateProvider = ({ children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    { children }
  </AppContext.Provider>
)

AppStateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.func
  ]).isRequired
}

AppStateProvider.defaultProps = {}

export const useAppState = () => useContext(AppContext)
