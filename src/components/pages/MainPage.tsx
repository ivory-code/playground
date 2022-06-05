import MainTemplate from '../templates/MainTemplate'
import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import Link from '../atoms/Link'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {StackParamList} from 'App'

type MainScreenProp = StackNavigationProp<StackParamList, 'MainPage'>

const MainPage = () => {
  const navigation = useNavigation<MainScreenProp>()

  return (
    <ScrollView>
      <MainTemplate />
      <Link
        text="Calendar Page"
        press={() => navigation.navigate('CalendarPage')}
      />
      <Link
        text="Counter Page"
        press={() => navigation.navigate('CounterPage')}
      />
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
