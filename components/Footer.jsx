import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'
import { motion } from "framer-motion"

export default function Footer() {

    return (
        
        <motion.nav 
        animate={{ y:0, opacity:1 }}
        initial={{ y:100, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: .2}}
        className="z-30 bg-black fixed bottom-0 left-0 w-full">
        <footer className="py-2 px-8">

            <div>
            <ul className="flex space-x-2 justify-center text-white">

            <li className="text-2xl hover:text-primary cursor-pointer">
                <a href="mailto:olasunkanmiibalogun@gmail.com?subject=Hello Olasunkanmi,...">
                <HiMail/>
                </a>
            </li>  

            <li className="text-2xl hover:text-primary cursor-pointer">
                <a href='https://www.linkedin.com/in/olasunkanmi-balogun-23b3a4202/' target='_blank' rel='noopener noreferrer'>
                <AiFillLinkedin/>
                </a>
            </li>

            <li className="text-2xl hover:text-primary cursor-pointer">
            <a href='https://github.com/SiR-PENt' target='_blank' rel='noopener noreferrer'>
                <AiFillGithub/>
            </a>
            </li>

            <li className="text-2xl hover:text-primary cursor-pointer">
            <a href='https://twitter.com/SiR_PENtt' target='_blank' rel='noopener noreferrer'>
                <AiOutlineTwitter/>
            </a>
            </li> 

            </ul>
            <p className="text-primary text-center">
                &copy; {new Date().getFullYear()} Olasunkanmi Balogun. All Rights Reserved
            </p>
            </div>
        </footer>
        </motion.nav>
    )
}