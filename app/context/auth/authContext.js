import PropTypes from 'prop-types'
import React, { createContext, useContext, useReducer } from 'react'
import initialState from './state'
import reducer from './reducer'

export const AuthContext = createContext()

export const AuthStateProvider = ({ children }) => (
  <AuthContext.Provider value={useReducer(reducer, initialState)}>
    { children }
  </AuthContext.Provider>
)

AuthStateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.func
  ]).isRequired
}

AuthStateProvider.defaultProps = {}

export const useAuthState = () => useContext(AuthContext)
