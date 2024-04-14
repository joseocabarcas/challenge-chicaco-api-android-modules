import IconBack from '@app/assets/icons/icon_back.svg'
import IconSave from '@app/assets/icons/icon_save.svg'
import { EventProps } from '@app/navigation/types'
import { removeHtml } from '@app/utils/removeHtml'
import * as React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Animated, {
  SharedTransition,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'
import { MoreTruncatedText } from '@app/components/more-truncated-text/more-truncated-text'

import { useGetEvent } from './hooks/useGetEvent'
import { styles } from './styles'

function EventScreen({ route, navigation }: EventProps) {
  const { eventId, uriImage } = route.params
  const { data } = useGetEvent(eventId)
  const event = data?.data

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

  const onBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <View style={styles.container}>
          {/* Image */}
          <View style={styles.containerImage}>
            {/* INFO: Shared element transition: cannot support when we use new architecture (fabric) */}
            <Animated.Image
              source={{ uri: uriImage }}
              style={[styles.image, rnStyle]}
              sharedTransitionTag={`event-${eventId}`}
              sharedTransitionStyle={transition}
            />
            <TouchableOpacity
              style={[styles.circleButton, styles.circleBack]}
              onPress={onBack}>
              <View>
                <IconBack height={18} width={14} color={'#FFFFFF'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.circleButton, styles.circleBookmark]}>
              <View>
                <IconSave height={18} width={14} color={'#FFFFFF'} />
              </View>
            </TouchableOpacity>
            <View style={styles.shadow}>
              <Text style={styles.textTitle}>
                {removeHtml(event?.title || '')}
              </Text>
            </View>
          </View>
          {event && (
            <View style={styles.containerSection}>
              <View style={styles.containerDesciption}>
                <Text style={styles.labelDesciption}>Description</Text>
                <MoreTruncatedText
                  style={styles.textDesciption}
                  linesToTruncate={4}
                  text={removeHtml(event.description)}
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EventScreen
