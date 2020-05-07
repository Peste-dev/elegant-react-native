import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Item from './Item';
import {View, FlatList, Loading, Appbar, Button, Text} from 'view/components';

import {t} from 'i18n';
import style from 'view/style';

import {getRepos} from 'store/reducers/github';
import {selectGithub} from 'store/selectors/github';

import buttons from './buttons';

const Github = ({navigation}) => {
  const {appStyle, githubStyle} = style;

  const [query, setQuery] = useState('react');
  const [scaleValue] = useState(new Animated.Value(0));

  const dispatch = useDispatch();
  const {goBack} = navigation;
  const github = useSelector(selectGithub);

  const _goBack = () => goBack();

  useEffect(() => {
    dispatch(getRepos(query));
  }, [dispatch, query]);

  useEffect(() => {
    if (!github.loading) {
      Animated.timing(scaleValue, {
        delay: github.data[query] * 350,
        duration: 600,
        toValue: 1,
      }).start();
    }
  }, [github, query, scaleValue]);

  return (
    <View style={appStyle.container}>
      <Appbar.Header style={appStyle.header}>
        <Appbar.Action onPress={() => _goBack()} icon="arrow-back" />
        <Appbar.Content title={t('github.title')} />
      </Appbar.Header>

      <View style={appStyle.content}>
        <View style={githubStyle.buttonArea}>
          {buttons.map((button) => (
            <Button
              key={button.id}
              mode="outlined"
              color="#13a77f"
              disabled={github.loading}
              onPress={() => setQuery(button.id)}
              style={appStyle.button}>
              {query === button.id && github.loading
                ? t('app.loading')
                : button.title}
            </Button>
          ))}
        </View>

        <View style={githubStyle.flatList}>
          {github.loading ? (
            <Loading />
          ) : (
            <Animated.View style={{opacity: scaleValue}}>
              <FlatList
                data={github.data}
                ListEmptyComponent={
                  <Text>
                    {github.error ? github.message : t('github.not_found')}
                  </Text>
                }
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item: {id, name, owner}}) => (
                  <Item key={id} title={name} owner={owner} />
                )}
              />
            </Animated.View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Github;
