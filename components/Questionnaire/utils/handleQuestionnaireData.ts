import { QA } from '../Questionnaire.types'

const createQuestionnaireData = (qa: QA[]) => {

  const data: {
    title: string; answer: string[];
  }[] = []

  const dfs = (_qa: QA[]) => {
    for (let i=0; i<_qa.length; i++) {
      let q = _qa[i]
      data.push({
        title: q.title,
        answer: q.answer
      })
      if (q.choices) {
        for (let j=0; j<q.choices.length; j++) {
          if (q.choices[j].questions) {
            dfs(q.choices[j].questions!)
          }
        }
      }
    }
  }

  dfs(qa)

  return data
}

export const handleQuestionnaireData = async (qa: QA[]) => {
  const response = await fetch('/api/sendQuestionnaireData', {
    method: 'POST',
    body: JSON.stringify(createQuestionnaireData(qa))
  })
  return response
}
