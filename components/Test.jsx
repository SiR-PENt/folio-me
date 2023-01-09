import { motion, useMotionValue } from 'framer-motion'
import {  useEffect, useRef } from 'react'

export default function MyComponent() {
  const elementRef = useRef(null)
  const x = useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => {
      const elementRect = elementRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      if (elementRect.top < viewportHeight && elementRect.top > 0) {
        x.set(5)
    //   } else if (elementRect.top < 0) {
    //     x.set(elementRect.top / viewportHeight)
    //   } else if (elementRect.bottom > viewportHeight) {
    //     x.set(-(elementRect.bottom - viewportHeight) / viewportHeight)
    //   }
      console.log(x)
    }}
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div style={{ x }}
    trasition={{delay: 2, duration:1}}
    >
      <div ref={elementRef}>My element</div>
    </motion.div>
  )
}
