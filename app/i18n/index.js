import I18n from 'i18n-js';
import {memoize} from 'lodash';
import {I18nManager} from 'react-native';

import {changeLanguage} from '../store/reducers/app';

import i18nEN from '../i18n/en';
import i18nFA from '../i18n/fa';
import {store} from '../store';
import app from './en/app';
import auth from './en/auth';
import home from './en/home';
import todos from './en/todos';
import github from './en/github';

I18n.translations = {
  en: {
    app: i18nEN.appLang,
    auth: i18nEN.authLang,
    home: i18nEN.homeLang,
    todos: i18nEN.todosLang,
    github: i18nEN.githubLang,
  },
  fa: {
    app: i18nFA.appLang,
    auth: i18nFA.authLang,
    home: i18nFA.homeLang,
    todos: i18nFA.todosLang,
    github: i18nFA.githubLang,
  },
};
I18n.fallbacks = ['en'];

const translate = memoize(
  (key, config) => I18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const t = (word) => I18n.t(word);
const setI18nConfig = (config) => {
  const state = store.getState();
  const {isRTL = false, name: languageTag} = config
    ? config
    : state.app.language;
  store.dispatch(changeLanguage({isRTL, name: languageTag}));

  translate.cache.clear();
  I18nManager.forceRTL(isRTL);

  I18n.locale = languageTag;
};

export default {
  appLang: app,
  authLang: auth,
  homeLang: home,
  todosLang: todos,
  githubLang: github,
};

export {setI18nConfig, t};
