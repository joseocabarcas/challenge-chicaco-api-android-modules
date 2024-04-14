import { useActions, useIsFavorite } from '@app/stores/events'

export const useFavorites = (eventId: number) => {
  const isFavorite = useIsFavorite(eventId)
  const { addToFavorite, removeFromFavorite } = useActions()

  return { isFavorite, addToFavorite, removeFromFavorite }
}
