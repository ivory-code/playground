import PressButton from '../atoms/PressButton'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

interface Props {
  countState?: number
  decrement?: () => void
  increment?: () => void
}

const CounterTemplate = ({countState, decrement, increment}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter</Text>
      <Text style={styles.text}>{countState}</Text>
      <View style={styles.buttonContainer}>
        <PressButton onPress={increment} style={styles.button}>
          <Text>+</Text>
        </PressButton>
        <PressButton onPress={decrement} style={styles.button}>
          <Text>-</Text>
        </PressButton>
      </View>
    </View>
  )
}

export default CounterTemplate

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300,
    height: 150,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 30,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
})
