import useHeaderScroll from '@/hooks/useHeaderScroll'
import { motion } from 'framer-motion'

const variants = {
  open: { marginTop: 0 },
  closed: { marginTop: -60 }
}

const Header = () => {
  const isHeaderActive = useHeaderScroll(100)

  return (
    <motion.div
      className="fixed w-screen flex items-center justify-center h-12 bg-white drop-shadow-lg z-10"
      initial='closed'
      animate={isHeaderActive ? 'open' : 'closed'}
      variants={variants}
    >
      <p>header</p>
    </motion.div>
  )
}

export default Header
