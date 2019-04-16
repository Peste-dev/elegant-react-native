import React, { createContext, useContext, useReducer } from 'react'
import initialState from './state'
import reducer from './reducer'

export const AuthContext = createContext()

export function AuthStateProvider(props) {
  return (
    <AuthContext.Provider value={useReducer(reducer, initialState)}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuthState = () => useContext(AuthContext)
