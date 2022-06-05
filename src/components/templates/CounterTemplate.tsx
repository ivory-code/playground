import PressButton from '../atoms/PressButton'
import React from 'react'
import {Text, View} from 'react-native'

interface Props {
  countState?: number
  decrement?: () => void
  increment?: () => void
}

const CounterTemplate = ({countState, decrement, increment}: Props) => {
  return (
    <View>
      <Text>Counter</Text>
      <Text>{countState}</Text>
      <PressButton onPress={increment}>
        <Text>+</Text>
      </PressButton>
      <PressButton onPress={decrement}>
        <Text>-</Text>
      </PressButton>
    </View>
  )
}

export default CounterTemplate
