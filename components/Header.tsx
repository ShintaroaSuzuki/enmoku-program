import useHeaderScroll from '@/hooks/useHeaderScroll'
import { motion } from 'framer-motion'

const variants = {
  open: { marginTop: 0 },
  closed: { marginTop: -60 }
}

const Header = () => {
  const { isHeaderActive } = useHeaderScroll(100)

  return (
    <motion.div
      className="fixed"
      animate={isHeaderActive ? 'open' : 'closed'}
      variants={variants}
    >
      <p>header</p>
    </motion.div>
  )
}

export default Header
