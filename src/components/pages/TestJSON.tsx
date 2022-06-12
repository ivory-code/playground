import analytics from '@react-native-firebase/analytics'
import React, {useEffect} from 'react'
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {CUSTOM_LOGEVENT} from '../../constants/default'
import {IMAGES} from '../../constants/images'
import {getRemoteValue} from '../../utils/firebase'
import Bold from '../atoms/Bold'
import CheckEventButton from '../atoms/CheckEventButton'

interface DetailProps {
  text: string
  image: object
  color: string
  url: string
}

interface NameProps {
  youtube: DetailProps
  linkedin: DetailProps
  instagram: DetailProps
  medium: DetailProps
  github: DetailProps
}

const config: NameProps = {
  youtube: {
    text: 'YouToube',
    image: IMAGES.youtube,
    color: '#FF0000',
    url: 'https://www.youtube.com/',
  },
  linkedin: {
    text: 'LinkedIn',
    image: IMAGES.linkedin,
    color: '#0077B5',
    url: 'https://www.linkedin.com/',
  },
  instagram: {
    text: 'Instagram',
    image: IMAGES.instagram,
    color: '#262625',
    url: 'https://www.instagram.com/',
  },
  medium: {
    text: 'Medium',
    image: IMAGES.medium,
    color: '#292929',
    url: 'https://www.medium.com/',
  },
  github: {
    text: 'GitHub',
    image: IMAGES.github,
    color: '#333333',
    url: 'https://www.github.com/',
  },
}

const TestJSON = () => {
  const {logo} = JSON.parse(
    getRemoteValue(CUSTOM_LOGEVENT.TYPE_JSON).asString(),
  )

  useEffect(() => {
    analytics().logEvent(CUSTOM_LOGEVENT.TYPE_JSON, {
      checkValue: logo,
    })
  }, [logo])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Images / JSON 🔗</Text>
        <Text style={styles.description}>
          Ok, let's test more than two posibilities! Here you will see a button
          that opens a external website.
        </Text>
        <Text style={styles.description}>
          Variants are: <Bold>LinkedIn</Bold>, <Bold>Youtube</Bold>,{' '}
          <Bold>Instagram</Bold>, <Bold>Medium</Bold> and <Bold>GitHub</Bold>.
        </Text>
        <TouchableOpacity
          style={[styles.button, {borderColor: config[logo]?.color}]}
          onPress={() => Linking.openURL(config[logo]?.url)}>
          <Image
            source={config[logo]?.image}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={[styles.description, {color: config[logo]?.color}]}>
            <Bold>{config[logo]?.text}</Bold>
          </Text>
        </TouchableOpacity>
      </View>
      <CheckEventButton eventName={CUSTOM_LOGEVENT.TYPE_JSON} value={logo} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
  title: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black,
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  button: {
    marginTop: 48,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 32,
  },
})

export default TestJSON
