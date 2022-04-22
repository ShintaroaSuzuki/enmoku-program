import { QA } from './Questionnaire.types'

const qa: QA[] = [
  {
    title: '感染症対策のため、緊急連絡先(氏名)を教えてください。',
    questionType: 'input',
    required: true,
    placeholder: '山田花子',
    inputType: 'text',
    answer: []
  },
  {
    title: '感染症対策のため、緊急連絡先(電話番号)を教えてください。',
    questionType: 'input',
    required: true,
    placeholder: '09012345678',
    inputType: 'tel',
    answer: []
  },
  {
    title: 'あなたは屯田西小学校ブラスバンドのOBOGの方ですか？',
    questionType: 'select',
    multi: false,
    choices: [
    ],
    required: true,
    answer: []
  },
]

export { qa }
