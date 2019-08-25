import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import i18n from 'i18n';
import style from 'view/style';
import {styleJoiner} from 'helpers/util';
import {View, Image, Appbar, Button} from 'view/components';

import {selectUser} from 'store/selectors/user';
import {login, logout} from 'store/reducers/user';

const Home = () => {
  const {appLang, homeLang, authLang} = i18n;
  const {appStyle, homeStyle} = style;

  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const user = useSelector(selectUser);

  const _toggleUserStatus = () => {
    if (user.loggedIn) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <View style={appStyle.container}>
      <Appbar.Header style={appStyle.header}>
        <Appbar.Content title={homeLang.title} />
      </Appbar.Header>

      <View style={appStyle.content}>
        <View style={homeStyle.HomeView}>
          <View style={homeStyle.logoView}>
            <Image
              style={homeStyle.logo}
              source={require('assets/images/logo.png')}
            />
          </View>

          <View style={homeStyle.buttonArea}>
            <View style={homeStyle.buttonAreaChild}>
              <Button
                mode="outlined"
                color={'#13a77f'}
                disabled={user.onCheck}
                onPress={() => _toggleUserStatus()}
                style={appStyle.button}>
                {user.onCheck
                  ? appLang.loading
                  : user.loggedIn
                  ? authLang.signOut
                  : authLang.signIn}
              </Button>
            </View>

            <View
              style={styleJoiner(
                homeStyle.buttonAreaChild,
                homeStyle.buttonAreaChildColumn,
              )}>
              <Button
                mode="outlined"
                color={'#13a77f'}
                onPress={() => navigate('Todos')}
                style={appStyle.button}>
                Todos
              </Button>
              <Button
                mode="outlined"
                color={'#13a77f'}
                onPress={() => navigate('Github')}
                style={appStyle.button}>
                Async Redux
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
