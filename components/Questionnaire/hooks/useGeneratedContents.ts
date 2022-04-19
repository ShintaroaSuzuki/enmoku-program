import { useRecoilValue } from 'recoil'
import { qaStateAtom } from '../store/atoms'
import { QA } from '../Questionnaire.types'
import { useMemo } from 'react'

export const generateContents = (qa: QA[]) => {
  const contents: QA[] = []

  const dfs = (_qa: QA[]) => {
    for (let i=0; i<_qa.length; i++) {
      let q = _qa[i]
      contents.push(q)

      if (q.choices) {
        for (let j=0; j<q.choices.length; j++) {
          if (q.answer.indexOf(q.choices[j].value) != -1) {
            if (q.choices[j].questions) {
              dfs(q.choices[j].questions!)
            }
          }
        }
      }
    }
  }

  dfs(qa)

  return contents
}

export const useGeneratedContents = () => {
  const qaState: QA[] = useRecoilValue(qaStateAtom)
  return useMemo(() => generateContents(qaState), [qaState])
}
