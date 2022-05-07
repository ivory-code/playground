import React from 'react'
import {Calendar} from 'react-native-calendars'
import {StyleSheet, View} from 'react-native'

const CalendarTemplate = () => {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  )
}

export default CalendarTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
