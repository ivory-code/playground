import MainPage from './src/components/pages/MainPage'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import CalendarPage from './src/components/pages/CalendarPage'
import CounterPage from './src/components/pages/CounterPage'
import {store} from './src/reducers/index'
import {Provider} from 'react-redux'

export type StackParamList = {
  MainPage: undefined
  CalendarPage: undefined
  CounterPage: undefined
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
          <Stack.Screen
            name="CounterPage"
            component={CounterPage}
            options={{
              title: 'CounterPage',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
