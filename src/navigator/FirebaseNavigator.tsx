import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import FirebasePage from '../components/pages/FirebasePage'
import TestBoolean from '../components/pages/TestBoolean'
import TestJSON from '../components/pages/TestJSON'
import TestString from '../components/pages/TestString'
import TestNumber from '../components/pages/TestNumber'

export type FirebaseNavigatorParamList = {
  FirebasePage: undefined
  TestBoolean: undefined
  TestJSON: undefined
  TestString: undefined
  TestNumber: undefined
}

const FirebaseStack = createStackNavigator<FirebaseNavigatorParamList>()

const FirebaseNavigator = () => {
  return (
    <FirebaseStack.Navigator>
      <FirebaseStack.Screen
        name="FirebasePage"
        component={FirebasePage}
        options={{
          title: 'FirebasePage',
        }}
      />
      <FirebaseStack.Screen
        name="TestBoolean"
        component={TestBoolean}
        options={{
          title: 'TestBoolean',
        }}
      />
      <FirebaseStack.Screen
        name="TestJSON"
        component={TestJSON}
        options={{
          title: 'TestJSON',
        }}
      />
      <FirebaseStack.Screen
        name="TestString"
        component={TestString}
        options={{
          title: 'TestString',
        }}
      />
      <FirebaseStack.Screen
        name="TestNumber"
        component={TestNumber}
        options={{
          title: 'TestNumber',
        }}
      />
    </FirebaseStack.Navigator>
  )
}

export default FirebaseNavigator
