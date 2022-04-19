import styles from './Questionnaire.module.scss'
import { motion } from 'framer-motion'
import { useAddAnswer, useUpdateAnswer, useDeleteAnswer } from './hooks/handleAnswer'
import { generateContents, useGeneratedContents } from './hooks/useGeneratedContents'
import { useSlidePage } from './hooks/useSlidePage'
import { usePaginate } from './hooks/usePaginate'

const RadioButton = (
  { 
    value,
  }: 
  {
    value: string;
  }
) => {

  const contents = useGeneratedContents()
  const page = useSlidePage()

  const title = contents[page].title
  const required = contents[page].required
  const selected = contents[page].answer.indexOf(value) != -1
  const multi = contents[page].multi

  const addAnswer = useAddAnswer({ title })
  const updateAnswer = useUpdateAnswer({ title })
  const deleteAnswer = useDeleteAnswer({ title })

  const onSelect = () => {
    if (multi) {
      return selected ? deleteAnswer(value) : addAnswer(value) 
    } else {
      return !selected && updateAnswer(value)
    }
  }

  const paginate = usePaginate()

  const _onClick = () => {
    const newContents = generateContents(onSelect())
    if (!multi && required) setTimeout(() => paginate(1, newContents), 400)
  }

  const variants = {
    container: {
      selected: {
        backgroundColor: "#3A47BD"
      },
      unselected: {
        backgroundColor: "#EDEFFF"
      }
    },
    circle: {
      selected: {
        borderColor: "#000E8A"
      },
      unselected: {
        borderColor: "#5464F3"
      }
    },
    title: {
      selected: {
        color: "#fff"
      },
      unselected: {
        color: "#000" }
    }
  }

  return (
    <motion.div
      className={styles.radioButtonContainer}
      animate={selected ? "selected" : "unselected"}
      variants={variants.container}
      onClick={_onClick}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        className={styles.radioButtonCircle}
        animate={selected ? "selected" : "unselected"}
        style={{ borderWidth: selected ? 6 : 2 }}
        variants={variants.circle}
      />
      <motion.p
        className={styles.radioButtonTitle}
        animate={selected ? "selected" : "unselected"}
        variants={variants.title}
      >
        {value}
      </motion.p>
    </motion.div>
  )
}

export default RadioButton
