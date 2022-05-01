import MainPage from './src/components/pages/MainPage'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {LogBox} from 'react-native'

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
])

export type StackParamList = {
  MainPage: undefined
}

const Stack = createStackNavigator<StackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{
            title: 'Experiments',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
