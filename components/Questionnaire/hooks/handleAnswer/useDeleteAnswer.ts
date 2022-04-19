import { useRecoilState } from 'recoil'
import { qaStateAtom } from '../../store/atoms'
import { QA } from '../../Questionnaire.types'
import { useCallback } from 'react'

const createNewState = (s: QA[], t: string, a: string) => {
  let _s = JSON.parse(JSON.stringify(s.slice()))

  const dfs = (qa: QA[]) => {
    for (let i=0; i<qa.length; i++) {
      let q = qa[i]
      if (q.title == t) q.answer = q.answer.filter(v => v != a)
      if (q.choices) {
        for (let j=0; j<q.choices.length; j++) {
          if (q.choices[j].questions) {
            dfs(q.choices[j].questions!)
          }
        }
      }
    }
  }

  dfs(_s)

  return _s
}

export const useDeleteAnswer = ({ title }: { title: string; }) => {
  const [qaState, setQaState] = useRecoilState(qaStateAtom)
  return useCallback((value: string) => {
    const newState = createNewState(qaState, title, value)
    setQaState(newState)
    return newState
  }, [qaState, setQaState, title])
}
