import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {ScrollView} from 'react-native'
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
    </ScrollView>
  )
}

export default FirebasePage
