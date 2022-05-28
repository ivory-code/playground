import React, {useCallback, useMemo} from 'react'
import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

/// Style
interface ButtonProps {
  width?: number
  height?: number
  backgroundColor?: string
  containerStyle?: StyleProp<ViewStyle>
  size?: number
}

export interface IconButtonProps extends ButtonProps {
  onPress?: () => void
  source: ImageSourcePropType
  disabled?: boolean
  tintColor?: string
  activeOpacity?: number
  opacity?: number
  resizeMode?: ImageResizeMode
}

/**
 * Button with Icon image
 */
export const IconButton = ({
  onPress,
  source,
  disabled,
  tintColor,
  containerStyle,
  ...props
}: IconButtonProps): React.ReactElement => {
  const _onPress = useCallback(() => {
    onPress && onPress()
  }, [onPress])

  const buttonStyle: ViewStyle = useMemo(() => {
    return {
      width: props.size || props.width || 30,
      height: props.size || props.height || 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.backgroundColor || 'transparent',
    }
  }, [props.backgroundColor, props.height, props.size, props.width])

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={_onPress}
      hitSlop={{top: 7, right: 7, left: 7, bottom: 7}}
      style={[containerStyle, buttonStyle]}
      activeOpacity={props.activeOpacity || 0.8}
      // underlayColor="transparent"
      {...props}>
      <Image
        source={source}
        style={{tintColor, opacity: props.opacity}}
        resizeMode={props.resizeMode}
        width={props.width}
        height={props.height}
      />
    </TouchableOpacity>
  )
}

export default IconButton
