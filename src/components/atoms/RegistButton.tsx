import React from 'react'
import {Image, StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native'

interface Props {
  onPress: () => void
  source: number
  width: number
  height: number
  style?: StyleProp<ViewStyle>
}

const RegistButton = ({onPress, source, width, height, style}: Props) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <Image source={source} style={{width: width, height: height}} />
      </TouchableOpacity>
    </View>
  )
}

export default RegistButton
