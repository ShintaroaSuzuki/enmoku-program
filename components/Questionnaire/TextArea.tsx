import styles from './Questionnaire.module.scss'
import { useUpdateAnswer } from './hooks/handleAnswer'
import { useGeneratedContents } from './hooks/useGeneratedContents'
import { useSlidePage } from './hooks/useSlidePage'

const TextArea = () => {

  const contents = useGeneratedContents()
  const page = useSlidePage()

  const title = contents[page].title
  const value = contents[page].answer[0]

  const updateAnswer = useUpdateAnswer({ title })

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateAnswer(e.target.value)
  }

  return (
    <textarea className={styles.textarea} value={value} onChange={(e) => onTextChange(e)}/>
  )
}

export default TextArea
