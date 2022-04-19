import styles from './Questionnaire.module.scss'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { qaStateAtom, submittedStateAtom } from './store/atoms'
import { handleQuestionnaireData } from './utils/handleQuestionnaireData'
import { useGeneratedContents } from './hooks/useGeneratedContents'
import { useSlidePage } from './hooks/useSlidePage'
import { usePaginate } from './hooks/usePaginate'
// import { darkMode } from '@/utils'

const NextButton = () => {
  const darkMode = false
  
  const contents = useGeneratedContents()
  const page = useSlidePage()
  const paginate = usePaginate()

  const qaState = useRecoilValue(qaStateAtom)

  const vacant = !contents[page].answer[0]

  const clickable = !contents[page].required || !vacant

  const lastPage = page == contents.length - 1

  const setSubmittedState = useSetRecoilState(submittedStateAtom)

  const buttonTheme = () => {
    if (lastPage) {
      if (clickable) {
        return {
          backgroundColor: '#5464F3',
          color: '#fff'
        }
      } else {
        return {
          backgroundColor: '#000E8A',
          color: '#aaa'
        }
      }
    } else {
      if (darkMode) {
        if (clickable) {
          return {
            backgroundColor: '#fff',
            color: '#000'
          }
        } else {
          return {
            backgroundColor: '#999',
            color: '#555'
          }
        }
      } else {
        if (clickable) {
          return {
            backgroundColor: '#000',
            color: '#fff'
          }
        } else {
          return {
            backgroundColor: '#aaa',
            color: '#ddd'
          }
        }
      }
    }
  }

  const onNextClick = () => {
    if (!clickable) return 
    paginate(1)
  }

  const onSubmit = async () => {
    if (!clickable) return
    const response = await handleQuestionnaireData(qaState)
    if (response) setSubmittedState(true)
  }

  return (
    <span
      className={styles.submit}
      onClick={lastPage ? onSubmit : onNextClick}
      style={buttonTheme()}
    >
      {lastPage ? '送信' : '次へ→'}
    </span>
  )
}

export default NextButton
