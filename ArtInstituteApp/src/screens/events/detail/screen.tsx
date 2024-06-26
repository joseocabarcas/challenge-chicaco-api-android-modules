import IconBack from '@app/assets/icons/icon_back.svg'
import IconCalendar from '@app/assets/icons/icon_calendar.svg'
import IconCalendarCheck from '@app/assets/icons/icon_calendar_check.svg'
import IconCalendarPlus from '@app/assets/icons/icon_calendar_plus.svg'
import IconMapLocation from '@app/assets/icons/icon_map_location.svg'
import IconStar from '@app/assets/icons/icon_star_regular.svg'
import IconStarFull from '@app/assets/icons/icon_star_solid.svg'
import { MoreTruncatedText } from '@app/components/more-truncated-text/more-truncated-text'
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

import { useEventScreen } from './hooks/useEventScreen'
import { useFavorites } from './hooks/useFavorites'
import { useGetEvent } from './hooks/useGetEvent'
import { styles } from './styles'

function EventScreen({ route, navigation }: EventProps) {
  const { eventId, uriImage } = route.params
  const { data } = useGetEvent(eventId)
  const { isFavorite, addToFavorite, removeFromFavorite } =
    useFavorites(eventId)
  const event = data?.data
  const { onHandleAddToCalendar, onHandleAddToCalendarAutomatic } =
    useEventScreen(event)

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

  const onHandleFavoriteAction = () => {
    if (!event) return
    isFavorite ? removeFromFavorite(eventId) : addToFavorite(event)
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
            <View style={styles.circleActions}>
              {/* Add to calendar automatic */}
              <TouchableOpacity
                onPress={() => void onHandleAddToCalendarAutomatic()}
                style={[styles.circleButton]}>
                <IconCalendarCheck height={18} width={14} color={'#FFFFFF'} />
              </TouchableOpacity>
              {/* Add to calendar */}
              <TouchableOpacity
                onPress={() => void onHandleAddToCalendar()}
                style={[styles.circleButton]}>
                <IconCalendarPlus height={18} width={14} color={'#FFFFFF'} />
              </TouchableOpacity>
              {/* Add or remove from favorites */}
              <TouchableOpacity
                onPress={onHandleFavoriteAction}
                style={[styles.circleButton]}>
                {isFavorite ? (
                  <IconStarFull height={18} width={14} color={'#FFFFFF'} />
                ) : (
                  <IconStar height={18} width={14} color={'#FFFFFF'} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.shadow}>
              <Text style={styles.textTitle}>
                {removeHtml(event?.title || '')}
              </Text>
              {/* Hero caption */}
              {event?.hero_caption && (
                <View style={styles.containerHero}>
                  <Text style={styles.textHero}>
                    {removeHtml(event.hero_caption)}
                  </Text>
                </View>
              )}
            </View>
          </View>
          {event && (
            <View style={styles.containerSection}>
              <View style={styles.containerItems}>
                <View style={styles.containerItemIcon}>
                  <IconCalendar
                    height={14}
                    width={14}
                    color={'#005477'}
                    style={styles.icon}
                  />
                  <Text style={styles.textIcon}>
                    {event?.date_display || ''}
                  </Text>
                </View>
                <View style={styles.containerItemIcon}>
                  <IconMapLocation
                    height={14}
                    width={14}
                    color={'#005477'}
                    style={styles.icon}
                  />
                  <Text style={styles.textIcon}>{event?.location || ''}</Text>
                </View>
              </View>
              <View style={styles.containerDesciption}>
                <Text style={styles.labelDesciption}>Description</Text>
                <MoreTruncatedText
                  style={styles.textDesciption}
                  linesToTruncate={4}
                  text={removeHtml(event.description)}
                />
              </View>
              {/* Tags */}
              <View style={styles.containerTags}>
                {event.is_free && (
                  <View style={[styles.tag, styles.tagPrimary]}>
                    <Text style={styles.textTag}>Free</Text>
                  </View>
                )}
                {event.is_sold_out && (
                  <View style={[styles.tag, styles.tagDanger]}>
                    <Text style={styles.textTag}>Sold Out</Text>
                  </View>
                )}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EventScreen
