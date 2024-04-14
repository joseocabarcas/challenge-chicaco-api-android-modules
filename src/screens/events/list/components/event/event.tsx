import { RootStackParamList } from '@app/navigation/types'
import { EventSlim } from '@app/types/events'
import { removeHtml } from '@app/utils/removeHtml'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import { SharedTransition } from 'react-native-reanimated'

interface EventProps {
  event: EventSlim
}

function Event({ event }: EventProps): React.JSX.Element {
  const navigation: NavigationProp<RootStackParamList> = useNavigation()
  const title = removeHtml(event.title)
  const shortDescription = removeHtml(event.short_description)

  const onPress = () => {
    navigation.navigate('Event', {
      eventId: event.id,
      uriImage: event.image_url,
    })
  }

  // It's optional styling for animated
  const rnStyle = useAnimatedStyle(() => {
    return {}
  }, [])

  const transition = SharedTransition.custom(values => {
    'worklet'
    return {
      height: withSpring(values.targetHeight),
      width: withSpring(values.targetWidth),
    }
  })

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.circleImage}>
          {/* INFO: Shared element transition: cannot support when we use new architecture (fabric) */}
          <Animated.Image
            source={{ uri: event.image_url }}
            style={[styles.image, rnStyle]}
            sharedTransitionTag={`event-${event.id}`}
            sharedTransitionStyle={transition}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={[styles.text, styles.textTitle]}>{title}</Text>
          <Text
            style={[styles.text, styles.textSecondary]}
            numberOfLines={3}
            ellipsizeMode="tail">
            {shortDescription}
          </Text>
          {event.date_display && (
            <Text style={[styles.text, styles.textSecondary]}>
              {event.date_display}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
    paddingVertical: 4,
  },
  circleImage: {
    borderRadius: 10,
    overflow: 'hidden',
    marginEnd: 8,
    width: 74,
    height: 80,
  },
  image: {
    width: 84,
    height: 78,
  },
  containerText: {
    flexGrow: 1,
    flexShrink: 1,
    overflow: 'hidden',
  },
  text: {
    marginBottom: 2,
    flexWrap: 'wrap',
    width: '100%',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  textSecondary: {
    fontSize: 10,
  },
})

export default Event
