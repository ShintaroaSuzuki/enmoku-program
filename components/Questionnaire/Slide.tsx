import dynamic from 'next/dynamic'
import styles from './Questionnaire.module.scss'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Title from './Title'
import Answer from './Answer'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { qaStateAtom, slideStateAtom, submittedStateAtom } from './store/atoms'

const NextButton = dynamic(
  () => import('./NextButton'),
  { ssr: false }
)

const BackButton = dynamic(
  () => import('./BackButton'),
  { ssr: false }
)

const ThanksPage = dynamic(
  () => import('./ThanksPage'),
  { ssr: false }
)

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000: -1000,
      opacity: 0,
    }
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000: -1000,
      opacity: 0,
    }
  }
}

export const Slide = () => {
  const resetQaState = useResetRecoilState(qaStateAtom)
  const resetSlideState = useResetRecoilState(slideStateAtom)
  const resetSubmittedState = useResetRecoilState(submittedStateAtom)

  const slideState = useRecoilValue(slideStateAtom)

  const submittedState = useRecoilValue(submittedStateAtom)

  useEffect(() => {
    resetSlideState()
    resetQaState()
    resetSubmittedState()
  }, [resetQaState, resetSlideState, resetSubmittedState])

  if (submittedState) return <ThanksPage />

  return (
    <div className={styles.slideWrapper}>
      <AnimatePresence
        initial={false}
        custom={slideState.direction}
      >
        <motion.div
          className={styles.slideContainer}
          key={slideState.page}
          custom={slideState.direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30},
            opacity: { duration: 0.2 }
          }}
        >
          <h3 className={styles.questionLabel}>{`Q${slideState.page+1}`}</h3>
          <Title />
          <Answer />
          <BackButton />
          <NextButton />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
