import { StackActions } from 'react-navigation'

export default router = ({props, routeName, params = {}, child = null, childParams = {}}) => {
  const route = StackActions.push({
    routeName,
    params
  })
  
  if (child) {
    childRoute = StackActions.push({
      routeName: child,
      params: childParams
    })

    route.action = childRoute
  }

  props.navigation.dispatch(route)
}
