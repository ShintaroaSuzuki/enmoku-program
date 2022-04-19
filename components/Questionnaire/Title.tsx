import styles from './Questionnaire.module.scss'
import { useGeneratedContents } from './hooks/useGeneratedContents'
import { useSlidePage } from './hooks/useSlidePage'

const Title = () => {
  const contents = useGeneratedContents()
  const page = useSlidePage()
  return ( 
    <p className={styles.questionTitle}>{contents[page].title}{contents[page].required && <span style={{ color: '#5464F3' }}> *</span>}</p>
  )
}

export default Title
