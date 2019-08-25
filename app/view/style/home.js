import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  HomeView: {
    alignSelf: 'stretch',
    flex: 2,
    width: '100%',
  },
  logo: {
    borderRadius: 5,
    height: 100,
    width: 100,
  },
  logoView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonArea: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  buttonAreaChild: {
    flex: 1,
  },
  buttonAreaChildColumn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
