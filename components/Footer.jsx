import Link from "next/link"
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
            <ul className="flex space-x-4 justify-center text-white">
            <li className="cursor-pointer">Github</li>
            <li className="cursor-pointer">LinkedIn</li>
            <li className="cursor-pointer">Twitter</li>  
            </ul>
            <p className="text-primary text-center">
                &copy; {new Date().getFullYear()} Olasunkanmi Balogun. All Rights Reserved
            </p>
            </div>
        </footer>
        </motion.nav>
    )
}