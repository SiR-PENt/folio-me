
import { motion } from "framer-motion"

export default function Header() {

    function scrollToTop() {
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    return (

        <motion.nav 
        animate={{ y:0, opacity:1 }}
        initial={{ y:100, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: .2}}
        className="z-30 bg-black fixed top-0 left-0 w-full">
        <header className="py-2 px-8 flex justify-between items-center">
            <div onClick={scrollToTop}>
            <p className="cursor-pointer text-white text-3xl">OB</p>
            </div>
        </header>
        </motion.nav>
    )

}