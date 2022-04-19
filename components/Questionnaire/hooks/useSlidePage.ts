import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { slideStateAtom } from '../store/atoms'

export const useSlidePage = () => {
  const slideState = useRecoilValue(slideStateAtom)
  return useMemo(() => slideState.page, [slideState])
}
