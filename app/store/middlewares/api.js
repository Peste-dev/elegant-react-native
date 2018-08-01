import auth from 'store/auth/actions'

export default apiMiddleware = () => {
  return ({ dispatch, getState }) => next => action => {
    if (action.error && action.error.status == 401) {
      dispatch(auth.signOut())
    }
    next(action)
    return Promise.resolve(getState())
  }  
}