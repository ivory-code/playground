import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import React, {useCallback, useState} from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Link from '../atoms/Link'
import RefreshConfig from '../atoms/RefreshButton'
import {FirebaseNavigatorParamList} from '../../navigator/FirebaseNavigator'
import Modal from 'react-native-modal'

type FirebaseScreenProp = StackNavigationProp<FirebaseNavigatorParamList>

const FirebasePage = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false)
  const navigation = useNavigation<FirebaseScreenProp>()

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <ScrollView>
      <RefreshConfig />
      <Link
        text="Test Boolean"
        press={() => navigation.navigate('TestBoolean')}
      />
      <Link text="Test JSON" press={() => navigation.navigate('TestJSON')} />
      <Link
        text="Test String"
        press={() => navigation.navigate('TestString')}
      />
      <Link
        text="Test Number"
        press={() => navigation.navigate('TestNumber')}
      />
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.text}>Test Modal</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
            <Text style={styles.text}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  )
}

export default FirebasePage

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
