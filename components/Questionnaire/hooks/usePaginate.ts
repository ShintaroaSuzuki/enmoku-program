import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { slideStateAtom } from '../store/atoms'
import { QA } from '../Questionnaire.types'
import { useGeneratedContents } from './useGeneratedContents'

export const usePaginate = () => {
  const [slideState, setSlideState] = useRecoilState(slideStateAtom)
  const contents = useGeneratedContents()
  return useCallback((newdirection: number, newContents: QA[] = contents) => {
    if (slideState.page + newdirection < 0 || slideState.page + newdirection >= newContents.length) return
    setSlideState({page: slideState.page + newdirection, direction: newdirection})
  }, [slideState, setSlideState, contents])
  
}
