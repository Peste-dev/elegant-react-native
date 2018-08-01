import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import { fonts, colors } from 'view/theme'

export default ({ title, onPress, isLoading }) => (
  isLoading ? (
    <View style={styles.activityIndicator}>
      <ActivityIndicator color={colors.primary} />
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={[styles.buttonText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
)

const styles = StyleSheet.create({
  button: {
    marginTop: 25,
    flexDirection: 'row'
  },
  buttonText: {
    color: colors.primary,
    fontFamily: fonts.light,
    fontSize: 22,
    letterSpacing: 0.5
  },
  activityIndicator: {
    transform: [{scale: 0.70}],
    marginTop: 3.5,
    marginLeft: 5
  }
})