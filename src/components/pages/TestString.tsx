/* eslint-disable react/no-unescaped-entities */
import analytics from '@react-native-firebase/analytics'
import React, {useEffect} from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {CUSTOM_LOGEVENT} from '../../constants/default'
import {getRemoteValue} from '../../utils/firebase'
import Bold from '../atoms/Bold'
import CheckEventButton from '../atoms/CheckEventButton'

const TestString = () => {
  const typeString = getRemoteValue(CUSTOM_LOGEVENT.TYPE_STRING).asString()

  useEffect(() => {
    analytics().logEvent(CUSTOM_LOGEVENT.TYPE_STRING, {
      checkValue: typeString,
    })
  }, [typeString])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Color / String 🎨</Text>
        <Text style={styles.description}>
          Let's try another way, let's use directly the value from{' '}
          <Bold>Remote Config</Bold>. Here you will se a rectangle with the
          color and string that cames from Firebase.
        </Text>
        <Text style={styles.description}>
          Variants are <Bold>Green</Bold>, <Bold>Red</Bold>, <Bold>Yellow</Bold>
          , <Bold>Orange</Bold> and <Bold>Skyblue</Bold>.
        </Text>
        <View style={[styles.rectangle, {backgroundColor: typeString}]}>
          <Text
            style={
              typeString === 'yellow' ? styles.black : styles.rectangleText
            }>
            <Bold>{typeString}</Bold>
          </Text>
        </View>
      </View>
      <CheckEventButton
        eventName={CUSTOM_LOGEVENT.TYPE_STRING}
        value={typeString}
      />
    </ScrollView>
  )
}

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
  rectangleText: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
  },
  black: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
  },
  rectangle: {
    width: 144,
    height: 72,
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
})

export default TestString
