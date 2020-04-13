import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RNRestart from 'react-native-restart';
import {Appbar, Button, Image, View, Alert} from 'view/components';

import style from 'view/style';
import {styleJoiner} from 'helpers/util';
import {setI18nConfig, t} from 'i18n';

import {login, logout} from 'store/reducers/user';
import {setAppFirstLaunch} from 'store/reducers/app';
import {selectApp} from 'store/selectors/app';
import {selectUser} from 'store/selectors/user';

const Home = ({navigation}) => {
  const {appStyle, homeStyle} = style;

  const dispatch = useDispatch();
  const {navigate} = navigation;

  const user = useSelector(selectUser);
  const app = useSelector(selectApp);

  useEffect(() => {
    if (app.isFirsLaunch) {
      showAlert();
    }

    setI18nConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _toggleUserStatus = () => {
    if (user.loggedIn) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  const _changeUserStatusButtonText = () => {
    if (user.loggedIn) {
      return t('auth.signOut');
    } else {
      return t('auth.signIn');
    }
  };

  const showAlert = useCallback(
    () =>
      Alert.alert(
        t('app.alertTitle'),
        t('app.alertMessage'),
        [
          {
            text: 'English',
            onPress: () => {
              setI18nConfig({isRTL: false, name: 'en'});
              dispatch(setAppFirstLaunch());
              setTimeout(RNRestart.Restart, 2000);
            },
          },
          {
            text: 'فارسی',
            onPress: () => {
              setI18nConfig({isRTL: true, name: 'fa'});
              dispatch(setAppFirstLaunch());
              setTimeout(RNRestart.Restart, 2000);
            },
            style: 'cancel',
          },
        ],
        {cancelable: true},
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <View style={appStyle.container}>
      <Appbar.Header style={appStyle.header}>
        <Appbar.Content title={t('home.title')} />
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
                color="#13a77f"
                disabled={user.onCheck}
                onPress={() => _toggleUserStatus()}
                style={appStyle.button}>
                {user.onCheck
                  ? t('app.loading')
                  : _changeUserStatusButtonText()}
              </Button>
            </View>
            <Button
              mode="outlined"
              color="#13a77f"
              disabled={user.onCheck}
              onPress={showAlert}
              style={appStyle.button}>
              {t('app.changeLanguage')}
            </Button>
            <View
              style={styleJoiner(
                homeStyle.buttonAreaChild,
                homeStyle.buttonAreaChildColumn,
              )}>
              <Button
                mode="outlined"
                color="#13a77f"
                onPress={() => navigate('Todos')}
                style={appStyle.button}>
                Todos
              </Button>
              <Button
                mode="outlined"
                color="#13a77f"
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
