import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {IMAGES} from '../../constants/images'
import {refreshConfig} from '../../utils/firebase'

const RefreshConfig = () => {
  const [loading, setLoading] = useState(false)

  const refreshPress = () => {
    setLoading(true)

    refreshConfig()
      .catch(console.log)
      .finally(() => {
        setLoading(false)
      })
  }

  const content = {
    refresh: <Text style={styles.text}>Refresh Values</Text>,
    spinner: (
      <Image
        source={IMAGES.loader}
        style={styles.spinner}
        resizeMode="contain"
      />
    ),
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={refreshPress}
      testID="refreshButton">
      {loading ? content.spinner : content.refresh}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 24,
    borderWidth: 2,
    borderColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 172,
    borderRadius: 32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    color: 'green',
  },
  spinner: {
    width: 24,
    height: 24,
  },
})

export default RefreshConfig
