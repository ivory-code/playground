import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {StackParamList} from 'App'
import Bold from '../atoms/Bold'
import {Colors} from 'react-native/Libraries/NewAppScreen'

type HomeScreenProp = StackNavigationProp<StackParamList, 'MainPage'>

const MainPage = () => {
  const navigation = useNavigation<HomeScreenProp>()

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Firebase Test 🧪👨🏻‍🔬</Text>
        <Text style={styles.description}>
          Hi there! This is a demo project to show the power of Firebase{' '}
          <Bold>Custom Log Events</Bold>, <Bold>A/B Testing</Bold> and{' '}
          <Bold>Remote Config</Bold> tools with React Native.
        </Text>
      </View>
    </ScrollView>
  )
}

export default MainPage

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
