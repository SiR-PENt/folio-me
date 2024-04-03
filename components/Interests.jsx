import { Header } from "./About"
import { motion } from "framer-motion"
export default function Interests() {

    return (

        <section className="py-24 px-8 lg:h-screen lg:flex lg:items-center lg:justify-center">
          <div>
            <Header>
                INTERESTS
            </Header>
          <div className="flex justify-center ">
            <motion.p 
            initial={{ opacity: 0, x: 100}}
            whileInView={{ opacity:1, x: 0 }}  
            transition={{ type:'spring', ease: 'easeOut', duration: .7, stiffness: 100, }}
            className="py-4 text-base md:text-xl text-secondary text-center lg:w-[700px]">
            I am particularly interested 
            in using modern JavaScript libraries such as React and Vue.js to build performant, 
            interactive user interfaces. I am actively involved in the 
            open source community and have contributed to several projects on GitHub,
             such as 
             <a href="https://github.com/formbricks/formbricks" 
             target='_blank' rel='noreferrer noopener'
             className="opacity-80 font-bold">
             {' '}Formbricks.
             </a>
             <br/>
             <br/>
             In my free time, I enjoy 
             exploring coding challenges and staying up-to-date with the latest technologies and best practices in 
             frontend development. I have a particular interest in using modern JavaScript libraries such as React/Nextjs
             to build performant, interactive user interfaces, and I am always looking for new ways to improve my skills and 
             learn from others in the field. I also have a strong foundation in data structures and algorithms, 
             and enjoy exploring ways to use these concepts to solve complex problems in a efficient and scalable way.
            </motion.p>
          </div>
          </div>
        </section>
    )
}