import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'

const MainTemplate = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Playground🧪👨🏻‍🔬</Text>
        <Text style={styles.description}>
          Hi there! This is a demo project to show the power of React-Native
          Libraries.
        </Text>
      </View>
    </ScrollView>
  )
}

export default MainTemplate

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
  title: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black,
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
})
