import React, { createContext, useContext, useReducer } from 'react'
import initialState from './state'
import reducer from './reducer'

export const AppContext = createContext()

export function AppStateProvider(props) {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {props.children}
    </AppContext.Provider>
  )
}

export const useAppState = () => useContext(AppContext)
