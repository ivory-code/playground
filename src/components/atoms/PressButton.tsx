import React from 'react'
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native'

interface Props {
  children?: React.ReactNode
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const PressButton = ({children, onPress, style}: Props) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

export default PressButton
