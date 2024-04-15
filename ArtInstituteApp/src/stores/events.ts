import { zustandStorage } from '@app/utils/storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { Event } from '@app/types/event'

interface EventsState {
  favorites: Event[]
  actions: {
    addToFavorite: (event: Event) => void
    removeFromFavorite: (eventId: number) => void
  }
}

export const useEventsStore = create<EventsState>()(
  persist(
    set => ({
      favorites: [],
      actions: {
        addToFavorite: event => {
          set(state => ({ favorites: [...state.favorites, event] }))
        },
        removeFromFavorite: eventId => {
          set(state => ({
            favorites: state.favorites.filter(todo => todo.id !== eventId),
          }))
        },
      },
    }),
    {
      name: 'bear-storage',
      storage: createJSONStorage(() => zustandStorage),
      partialize: state => ({ favorites: state.favorites }),
    },
  ),
)

export const useFavoritesEvents = () => useEventsStore(state => state.favorites)

export const useActionsEvents = () => useEventsStore(state => state.actions)

export const useIsFavorite = (eventId: number) =>
  useEventsStore(state => state.favorites.find(item => item.id === eventId))
