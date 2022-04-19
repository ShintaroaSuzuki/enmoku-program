import styles from './Questionnaire.module.scss'
import { useGeneratedContents } from './hooks/useGeneratedContents'
import { useSlidePage } from './hooks/useSlidePage'
import dynamic from 'next/dynamic'

const RadioButton = dynamic(
  () => import('./RadioButton'),
  { ssr: false }
)

const TextArea = dynamic(
  () => import('./TextArea'),
  { ssr: false }
)

const Input = dynamic(
  () => import('./Input'),
  { ssr: false }
)

const Answer = () => {
  const contents = useGeneratedContents()
  const page = useSlidePage()

  switch(contents[page].questionType) {
    case 'select':
      return (
        <div className={styles.answerContainer}>
          {
            contents[page].choices!.map((v, i) => 
              <RadioButton
                key={`choice_${i}`}
                value={v.value}
              />
            )
          }
        </div>
      )
    case 'textarea':
      return (
        <div className={styles.answerContainer}>
          <TextArea />
        </div>
      )
    case 'input':
      return (
        <div className={styles.answerContainer}>
          <Input />
        </div>
      )
  }
}

export default Answer
