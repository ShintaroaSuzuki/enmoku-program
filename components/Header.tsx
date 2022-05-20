import { useState, useEffect, useCallback } from 'react'
import useHeaderScroll from '@/hooks/useHeaderScroll'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as Scroll, animateScroll } from 'react-scroll'
import { HeaderProps } from '@/types'

const headerVariants = {
    open: { marginTop: 0 },
    closed: { marginTop: -80 }
}

const menuVariants = {
    open: { scale: 1, opacity: 1 },
    closed: { scale: 0, opacity: 0 }
}

const Header = ({ title, subtitle, links }: HeaderProps) => {
    const [menuOpened, setMenuOpened] = useState<boolean>(false)

    const isHeaderActive = useHeaderScroll(100)

    const handleMenu = () => {
        setMenuOpened(!menuOpened)
    }

    const hideMenu = useCallback(() => {
        if (!isHeaderActive) setMenuOpened(false)
    }, [isHeaderActive])

    const returnTop = () => {
        animateScroll.scrollToTop()
    }

    useEffect(() => {
        hideMenu()
    }, [hideMenu])

    return (
        <motion.div
            className="fixed w-screen flex items-center justify-between h-16 bg-white drop-shadow-lg z-10"
            initial="closed"
            animate={isHeaderActive ? 'open' : 'closed'}
            variants={headerVariants}
        >
            {menuOpened && (
                <div className="fixed z-20 w-full top-2 px-2 flex flex-col items-end">
                    <AnimatePresence>
                        <motion.div
                            className="w-full bg-white flex flex-row justify-between p-4 rounded-md origin-top-right"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            transition={{ type: 'tween', duration: 0.2 }}
                        >
                            <nav className="flex flex-col w-full">
                                {links.map((link, key) => (
                                    <Scroll
                                        to={link.id}
                                        key={`linkItem_${key}`}
                                        smooth={true}
                                        offset={-80}
                                    >
                                        <p className="relative text-sm my-2 text-neutral-700">
                                            {link.title}
                                        </p>
                                    </Scroll>
                                ))}
                            </nav>
                            <div>
                                <svg
                                    onClick={handleMenu}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    stroke={'rgba(55, 55, 55, 0.7)'}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
            <div className="flex flex-row items-center w-full px-4 justify-between">
                <p onClick={returnTop} className="font-bold w-full">
                    {title + (subtitle ? ' ' + subtitle : '')}
                </p>
                <div>
                    <svg
                        onClick={handleMenu}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke={'rgba(55, 55, 55, 0.7)'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </div>
            </div>
        </motion.div>
    )
}

export default Header
