import { motion } from 'framer-motion'
import styles from './Questionnaire.module.scss'
// import { handleSendAccessData } from '@/utils/handleAccessData'
// import * as gtag from '@/lib/gtag'
// import { lineHref } from '@/utils'

const variants = {
  initial: {
    marginTop: 60,
    opacity: 0,
  },
  animate: {
    marginTop: 0,
    opacity: 1,
  }
}

const ThanksPage = () => {
  /*
  const handleClick = (category: string) => {
    handleSendAccessData({
      action: 'click',
      category: category,
      label: 'thanks'
    })
    gtag.event({
      action: 'click',
      category: category,
      label: 'thanks' 
    })
  }
  */

  return (
    <motion.div
      className={styles.thanksPageContainer}
      initial={variants.initial}
      animate={variants.animate}
      transition={{
        marginTop: { duration: 2.0 },
        opacity: { duration: 2.0 }
      }}
    >
      <h3>ご回答ありがとうございます</h3>
      <p>よろしければLINE公式アカウントの友だち追加もしていただけますと幸いです</p>
      <a href={''} className={styles.lineButton} target="_blank" rel="noopener noreferrer">
        <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="60" />
      </a>
    </motion.div>
  )
}

export default ThanksPage
