import { StateStorage } from 'zustand/middleware'
import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: `user-storage`,
  encryptionKey: 'hunter2',
})

export const zustandStorage: StateStorage = {
  setItem: (name: string, value: string) => {
    return storage.set(name, value)
  },
  getItem: (name: string) => {
    const value = storage.getString(name)
    return value ?? null
  },
  removeItem: (name: string) => {
    return storage.delete(name)
  },
}
