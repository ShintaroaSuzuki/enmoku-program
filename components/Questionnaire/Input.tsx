import styles from './Questionnaire.module.scss'
import { useUpdateAnswer } from './hooks/handleAnswer'
import { useGeneratedContents } from './hooks/useGeneratedContents'
import { useSlidePage } from './hooks/useSlidePage'

const Input = () => {

  const contents = useGeneratedContents()
  const page = useSlidePage()

  const title = contents[page].title
  const value = contents[page].answer[0]
  const placeholder = contents[page].placeholder
  const inputType = contents[page].inputType

  const updateAnswer = useUpdateAnswer({ title })

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateAnswer(e.target.value)
  }

  return (
    <input className={styles.input} placeholder={placeholder} type={inputType} value={value} onChange={(e) => onTextChange(e)}/>
  )
}

export default Input
