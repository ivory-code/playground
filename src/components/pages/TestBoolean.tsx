import analytics from '@react-native-firebase/analytics'
import React, {useEffect} from 'react'
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import {CUSTOM_LOGEVENT} from '../../constants/default'
import {IMAGES} from '../../constants/images'
import {getRemoteValue} from '../../utils/firebase'
import Bold from '../atoms/Bold'
import CheckEventButton from '../atoms/CheckEventButton'

const TestBoolean = () => {
  const typeBoolean = getRemoteValue(CUSTOM_LOGEVENT.TYPE_BOOLEAN).asBoolean()

  const variants = {
    mario: (
      <Image source={IMAGES.mario} style={styles.image} resizeMode="contain" />
    ),
    luigi: (
      <Image source={IMAGES.luigi} style={styles.image} resizeMode="contain" />
    ),
  }

  useEffect(() => {
    analytics().logEvent(CUSTOM_LOGEVENT.TYPE_BOOLEAN, {
      checkValue: typeBoolean.toString(),
    })
  }, [typeBoolean])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Mario & Luigi / Boolean 🍄</Text>
        <Text style={styles.description}>
          In this one we will test an image! If you see <Bold>Mario</Bold>, you
          are in <Bold>Variant A</Bold>, otherwise, if you see{' '}
          <Bold>Luigi</Bold>, you are in <Bold>Control Group</Bold>.
        </Text>
        {typeBoolean ? variants.mario : variants.luigi}
      </View>
      <CheckEventButton
        eventName={CUSTOM_LOGEVENT.TYPE_BOOLEAN}
        value={typeBoolean}
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
    color: '#333',
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  image: {
    marginTop: 48,
    width: 144,
    height: 144,
    alignSelf: 'center',
  },
})

export default TestBoolean
