import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
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

type FirebaseScreenProp = StackNavigationProp<FirebaseNavigatorParamList>

const FirebasePage = () => {
  const navigation = useNavigation<FirebaseScreenProp>()

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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Test Modal</Text>
      </TouchableOpacity>
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
})
