import React, {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Modal from 'react-native-modal'

const TestModal = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.text}>Show Modal</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.contentsContainer}></View>
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
