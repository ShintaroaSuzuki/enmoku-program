import styles from './Questionnaire.module.scss'
import { useRecoilState } from 'recoil'
import { slideStateAtom } from './store/atoms'
import { usePaginate } from './hooks/usePaginate'

const BackButton = () => {
  const [slideState, setSlideState] = useRecoilState(slideStateAtom)
  const paginate = usePaginate()

  return (
    (slideState.page != 0) ? <span className={styles.back} onClick={() => paginate(-1)}>← 戻る</span> : null
  )
}

export default BackButton
