import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {

    return (
        <motion.nav 
        animate={{ y:0, opacity:1 }}
        initial={{ y:-100, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: .2}}
        className="z-30 bg-black fixed top-0 left-0 w-full">
        <header className="py-4 px-8 flex justify-between items-center">
            <Link href='/'>
            <p className="cursor-pointer text-white text-3xl">OB</p>
            </Link>
            <ul className="flex space-x-4 text-white">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Portfolio</li>
            <li className="cursor-pointer">Contact</li>  
            </ul>
        </header>
        </motion.nav>
    )
}