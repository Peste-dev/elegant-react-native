import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import colors from 'view/style/theme';

const Loading = ({size, color}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

Loading.defaultProps = {
  color: colors.primary,
  size: 'small',
};

export default Loading;
