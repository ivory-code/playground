import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import CalendarPage from './src/components/pages/CalendarPage'
import CounterPage from './src/components/pages/CounterPage'
import MainPage from './src/components/pages/MainPage'
import {persistor, store} from './src/reducers/index'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import FirebaseNavigator from './src/navigator/FirebaseNavigator'
import {fetchConfig} from './src/utils/firebase'

fetchConfig().catch(console.log)

export type StackParamList = {
  MainPage: undefined
  CalendarPage: undefined
  CounterPage: undefined
  FirebasePage: undefined
}

const Stack = createStackNavigator<StackParamList>()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
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
              <Stack.Screen
                name="FirebasePage"
                component={FirebaseNavigator}
                options={{
                  title: 'FirebasePage',
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
