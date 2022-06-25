import analytics from '@react-native-firebase/analytics'
import React, {useEffect, useMemo, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {CUSTOM_LOGEVENT} from '../../constants/default'
import {IMAGES} from '../../constants/images'
import {getRemoteValue} from '../../utils/firebase'
import Modal from 'react-native-modal'

const TestModal = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false)
  const typeModalString = getRemoteValue(
    CUSTOM_LOGEVENT.TYPE_MODAL_STRING,
  ).asString()

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  useEffect(() => {
    analytics().logEvent(CUSTOM_LOGEVENT.TYPE_MODAL_STRING, {
      checkValue: typeModalString,
    })
  }, [typeModalString])

  const getTestValue = useMemo(() => {
    switch (typeModalString) {
      case 'A':
        return (
          <View
            style={[styles.contentsContainer, {backgroundColor: '#EB4F34'}]}>
            <Image
              source={IMAGES.mario}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>You are in Group A.</Text>
          </View>
        )
      case 'B':
        return (
          <View
            style={[styles.contentsContainer, {backgroundColor: '#34EB6B'}]}>
            <Image
              source={IMAGES.luigi}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>You are in Group B.</Text>
          </View>
        )
      default:
        return (
          <View
            style={[styles.contentsContainer, {backgroundColor: '#34BAEB'}]}>
            <Image
              source={IMAGES.yoshi}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>You are in nothing.</Text>
          </View>
        )
    }
  }, [])

  useEffect(() => {
    analytics().logEvent(CUSTOM_LOGEVENT.TYPE_MODAL_STRING, {
      checkValue: typeModalString,
    })
  }, [typeModalString])

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.text}>Show Modal</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          {getTestValue}
          <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
            <Text style={styles.text}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  )
}

export default TestModal

const styles = StyleSheet.create({
  button: {
    margin: 12,
    borderWidth: 2,
    borderColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentsContainer: {
    width: 300,
    height: 500,
    backgroundColor: 'beige',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 48,
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  modalButton: {
    margin: 12,
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
