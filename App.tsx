import MainPage from './src/components/pages/MainPage'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import CalendarPage from './src/components/pages/CalendarPage'
import {store} from './src/reducers/index'
import {Provider} from 'react-redux'

export type StackParamList = {
  MainPage: undefined
  CalendarPage: undefined
}

const Stack = createStackNavigator<StackParamList>()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{
              title: 'PlayGround',
            }}
          />
          <Stack.Screen
            name="CalendarPage"
            component={CalendarPage}
            options={{
              title: 'CalendarPage',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
