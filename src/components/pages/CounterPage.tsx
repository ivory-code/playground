import React from 'react'
import CounterTemplate from '../templates/CounterTemplate'
import {StyleSheet, View} from 'react-native'
import {useDispatch} from 'react-redux'
import {decrement, increment} from '../../stores/counter'
import {useSelector} from 'react-redux'
import {RootState} from '../../reducers/index'

const CounterPage = () => {
  const dispatch = useDispatch()
  const count = useSelector((state: RootState) => state.counter.number)

  const onPressIncrement = () => dispatch(increment())

  const onPressDecrement = () => dispatch(decrement())

  return (
    <View style={styles.container}>
      <CounterTemplate
        countState={count}
        decrement={onPressDecrement}
        increment={onPressIncrement}
      />
    </View>
  )
}

export default CounterPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
