import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { qa } from '../qa'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : window.sessionStorage,
})

export const slideStateAtom = atom({
  key: 'slide',
  default: { page: 0, direction: 0 },
  effects_UNSTABLE: [persistAtom]
})

export const contentsStateAtom = atom({
  key: 'contents',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export const qaStateAtom = atom({
  key: 'qa',
  default: qa,
  effects_UNSTABLE: [persistAtom]
})

export const submittedStateAtom = atom({
  key: 'submitted',
  default: false,
  effects_UNSTABLE: [persistAtom]
})
