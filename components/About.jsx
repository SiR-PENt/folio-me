import { motion } from 'framer-motion'
import { useRef } from 'react';

export function Header( { children } ) {

    return (
        <motion.h3 
          initial={{ opacity: 0, x: -100}}
          whileInView={{ opacity:1, x:0 }}  
          transition={{ type:'spring', ease: 'easeOut', duration: .7, stiffness: 100, delay:.3 }}
        className='uppercase text-center font-bold tracking-widest text-secondary font-bold md:text-xl'>
            {children}
        </motion.h3>
    )
}
export default function Profile() {

    const scrollRef = useRef(null);

    return (
        <section 
        className='py-20 md:py-0 lg:h-screen md:flex md:items-center md:justify-center'>
        <div className='z-20 -rotate-[8deg] w-[110%] bg-primary h-96 absolute -top-36 mt-2'/>
              {/* <Test/> */}
        <motion.div 
         viewport={{ root: scrollRef }}
         className='px-8 relative z-30'>

        <Header>
          Profile
        </Header>

        <div className='flex justify-center'>            
        <motion.p 
         initial={{ opacity: 0, x: 100,}}
         whileInView={{ opacity:1, x:0 }}  
         transition={{ type:'spring', ease: 'easeOut', delay:.5, duration: .7, stiffness: 100, }}
        className='py-4 text-lg md:text-xl text-secondary text-center lg:w-[700px]'>
        I&apos;m a frontend developer with versatilities in technologies ranging from basic HTML to modern technologies 
        like TypeScript and Nextjs.
        I also have a background as a technical writer, hence a strong foundation in coding and technical communication. 
        I am committed to continuing to develop my skills and expertise in these areas, and to make a meaningful 
        contribution to the success of any organisations I work with.
        </motion.p>
        </div>
        </motion.div>
        </section>
    )
}