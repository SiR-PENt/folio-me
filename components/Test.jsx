import { motion, useScroll } from 'framer-motion'
import { useEffect } from 'react'

export default function Test() {
  const { scrollY } = useScroll()

  useEffect(() => {
    console.log(scrollY)
  }, [scrollY])

  
  return (
    <motion.div
      style={{ x: scrollY }}
      transition={{ duration: 5 }}>
      My element
    </motion.div>
  )
}