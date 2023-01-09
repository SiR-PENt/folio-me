import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function Contact() {

    return (

        <section className='text-secondary md:py-0 px-8'>
           <div className="flex justify-center">
            <p className="py-4 text-base md:text-xl text-secondary text-center lg:w-[700px]">
            I am always interested in discussing new opportunities and projects.<br/> 
            You have a question or would like to work with me?
            </p>
            </div>
            <p className="mt-10 lg:mt-20 py-4 md:py-8 text-2xl 
            md:text-5xl lg:text-[160px] border-2 border-x-transparent
             border-y-secondary transition-color ease-out duration-500 hover:border-y-black
            hover:text-black text-center uppercase">
                <a 
                href="mailto:olasunkanmiibalogun@gmail.com?subject=Hello Olasunkanmi,...">       
                   Get in Touch  
                </a> 
            </p>

        <motion.footer 
            initial={{ y:100, opacity: 0 }}
            whileInView={{ y:0, opacity:1 }}
            transition={{ type:'spring', ease: 'easeOut', duration: .7, stiffness:'100'}}
            className="mt-4 px-8">
            <div>
                <div className="flex justify-center">
               <p className="md:text-2xl transition-color ease-out duration-300
                 font-bold tracking-wide hover:opacity-50 transition-opacity ease-out duration-1000 cursor-pointer my-6">
                Olasunkanmiibalogun@gmail.com
               </p>
                </div>
            <ul className="flex space-x-2 justify-center text-secondary">

            <li className="text-2xl hover:opacity-50 cursor-pointer transition-opacity ease-out duration-1000">
                <a href="mailto:olasunkanmiibalogun@gmail.com?subject=Hello Olasunkanmi,...">
                <HiMail/>
                </a>
            </li>  

            <li className="text-2xl hover:opacity-50 cursor-pointer transition-opacity ease-out duration-1000">
                <a href='https://www.linkedin.com/in/olasunkanmi-balogun-23b3a4202/' 
                target='_blank' rel='noopener noreferrer'>
                <AiFillLinkedin/>
                </a>
            </li>

            <li className="text-2xl hover:opacity-50 cursor-pointer transition-opacity ease-out duration-1000">
            <a href='https://github.com/SiR-PENt' 
            target='_blank' rel='noopener noreferrer'>
                <AiFillGithub/>
            </a>
            </li>

            <li className="text-2xl hover:opacity-50 cursor-pointer transition-opacity ease-out duration-1000">
            <a href='https://twitter.com/SiR_PENtt' 
            target='_blank' rel='noopener noreferrer'>
                <AiOutlineTwitter/>
            </a>
            </li> 

            </ul>
            <p className="text-secondary my-4 text-center">
                &copy; {new Date().getFullYear()} Olasunkanmi Balogun. All Rights Reserved
            </p>
            </div>
        </motion.footer>
        </section>
    )
}