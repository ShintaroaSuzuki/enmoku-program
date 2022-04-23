import { QA } from './Questionnaire.types'

const qa: QA[] = [
  {
    title: 'あなたは屯田西小学校ブラスバンドのOBOGの方ですか？',
    questionType: 'select',
    multi: false,
    choices: [
      { 
        value: 'はい',
        questions: [
          {
            title: '出演はしましたか？',
            questionType: 'select',
            multi: false,
            choices: [
              { value: 'はい' },
              { value: 'いいえ' }
            ],
            required: true,
            answer: []
          }
        ]
      },
      { value: 'いいえ'}
    ],
    required: true,
    answer: []
  },
]

export { qa }
