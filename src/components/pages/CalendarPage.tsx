import React from 'react'
import CalendarTemplate from '../templates/CalendarTemplate'
import {StyleSheet, View} from 'react-native'

const CalendarPage = () => {
  return (
    <View style={styles.container}>
      <CalendarTemplate />
    </View>
  )
}

export default CalendarPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
