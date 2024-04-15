import { useActionsEvents, useIsFavorite } from '@app/stores/events'

export const useFavorites = (eventId: number) => {
  const isFavorite = useIsFavorite(eventId)
  const { addToFavorite, removeFromFavorite } = useActionsEvents()

  return { isFavorite, addToFavorite, removeFromFavorite }
}
