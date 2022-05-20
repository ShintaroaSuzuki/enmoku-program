import { QA } from './Questionnaire.types';

const qa: QA[] = [
  {
    title: '今回のコンサートをどこで知りましたか？',
    questionType: 'select',
    choices: [
      {
        value: '出演者からの紹介',
        questions: [
          {
            title: 'どなたからの紹介で今回のコンサートを知りましたか？',
            questionType: 'select',
            choices: [
              { value: '中村 愛伽' },
              { value: '伊藤 拓朗' },
              { value: '山本 健太郎' },
              { value: '須藤 由衣' },
              { value: '三本木 力哉' }
            ],
            required: true,
            answer: []
          }
        ]
      },
      { value: '出演者以外からの紹介' },
      { value: 'SNS' },
      { value: 'チラシ' },
      { value: 'インターネット' }
    ],
    required: true,
    answer: []
  },
  {
    title: 'スマートフォンでのプログラムの閲覧はご満足いただけましたか？',
    questionType: 'select',
    choices: [
      { value: '3（満足）' },
      {
        value: '2（普通）',
        questions: [
          {
            title: '満足に至らなかった理由を教えていただけますと幸いです。',
            questionType: 'textarea',
            required: false,
            answer: []
          }
        ]
      },
      {
        value: '1（不満）',
        questions: [
          {
            title: '不満だった理由を教えていただけますと幸いです。',
            questionType: 'textarea',
            required: false,
            answer: []
          }
        ]
      }
    ],
    required: true,
    answer: []
  },
  {
    title:
      'コンサート全体を通して、ご要望がございましたら是非お聞かせください。',
    questionType: 'textarea',
    required: false,
    answer: []
  }
];

export { qa };
