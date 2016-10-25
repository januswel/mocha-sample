import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

export default function Intro() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello, react-native meetup!!
      </Text>
    </View>
  )
}
