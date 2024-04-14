import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Events: undefined
  Event: { eventId: number; uriImage: string }
}

export type EventProps = NativeStackScreenProps<RootStackParamList, 'Event'>
