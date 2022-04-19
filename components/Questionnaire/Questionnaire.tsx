import styles from './Questionnaire.module.scss'
import { RecoilRoot } from 'recoil'
import { Slide } from './Slide'

const Component = () => {

  return (
    <RecoilRoot>
      <div className={styles.container}>
        <Slide />
      </div>
    </RecoilRoot>
  )
}

export default Component
