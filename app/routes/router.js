import {StackActions} from 'react-navigation';

const router = ({
  props,
  routeName,
  params = {},
  child = null,
  childParams = {},
}) => {
  const route = StackActions.push({
    params,
    routeName,
  });

  if (child) {
    const childRoute = StackActions.push({
      params: childParams,
      routeName: child,
    });

    route.action = childRoute;
  }

  props.navigation.dispatch(route);
};

export default router;
