import { useEffect, useState, useRef } from 'react'

const useHeaderScroll = (activePoint: number): boolean => {
  const [isHeaderActive, setIsHeaderActive] = useState<boolean>(false)
  const postScroll = useRef<number>(0)

  useEffect(() => {
    const scrollWindow = () => {
      const ap = activePoint
      const scroll = window.scrollY
      const down = scroll >= postScroll.current
      postScroll.current = scroll
      if (scroll >= ap) {
        if (down) {
          setIsHeaderActive(false)
        } else {
          setIsHeaderActive(true)
        }
      } else {
        setIsHeaderActive(true)
      }
    }
    
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [activePoint])

  return isHeaderActive
}

export default useHeaderScroll
