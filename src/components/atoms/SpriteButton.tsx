import React, {useCallback, useRef} from 'react'
import {ImageSourcePropType, StyleSheet, View} from 'react-native'
import SpriteSheet from 'rn-sprite-sheet'

interface Props {
  source?: ImageSourcePropType
  stamp?: number
  isFocused?: boolean
}

const SpriteButton = (props: Props) => {
  const spriteRef = useRef<SpriteSheet>(null)

  const onSpriteLoad = useCallback(ref => {
    ref.current?.play({
      type: 'basic',
      fps: 5,
      loop: true,
    })
  }, [])

  return (
    <View style={styles.stampContainer}>
      <SpriteSheet
        ref={spriteRef}
        onLoad={() => onSpriteLoad(spriteRef)}
        source={props.source}
        columns={3}
        rows={1}
        height={45}
        width={45}
        animations={{
          basic: [0, 1, 2],
        }}
      />
    </View>
  )
}

export default SpriteButton

const styles = StyleSheet.create({
  stampContainer: {
    width: 68,
    height: 68,
  },
})
