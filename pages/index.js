import Head from 'next/head'
import Header from '../components/Header'
import { motion } from "framer-motion"
import { leagueSpartan } from './_app'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Interests from '../components/Interests'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Test from '../components/Test'

export default function Home() {

  return (
    <>
      <Head>
        <title>Olasunkanmi &mdash; Front-end Developer</title>
        <meta name="description" content="The portfolio of Olasunkanmi Balogun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='description' content='Olasunkanmi Balogun is a frontend developer passionate about building websites 
        that conforms to standard'/>
      
      </Head>

      <div className={`${leagueSpartan.variable} font-spartan overflow-hidden`}>
       {/* <Header/> */}
       {/* <Footer/> */}
     
      <div className='pt-32 px-8 md:pt-80 lg:pt-16 h-[700px] bg-light-dark md:h-screen'>
        <div className='md:leading-tight lg:pt-10'>
        <motion.p
          animate={{ y:0, opacity:1 }}
          initial={{ y:100, opacity: 0 }}
          transition={{ type:'spring', ease: 'easeOut', duration: .5, stiffness: 100}}
          exit={{ x:-100 }}
         className={`text-light font-thin italic text-2xl text-shadow`}>the portfolio of</motion.p>
    
        <motion.p 
          animate={{ y:0, opacity:1 }}
          initial={{ y:100, opacity: 0 }}
          exit={{ x:-100 }}
          transition={{ type:'spring', ease: 'linear', duration: .9, delay:.1, stiffness: 100 }}

        className={`hero-text w-full font-bold
        text-primary tracking-widest`}>
          OLASUNKANMI
          </motion.p>

        <motion.div 
         animate={{ y:0, opacity:1 }}
         initial={{ y:100, opacity: 0 }}
         transition={{ type:'spring', ease: 'linear', duration: 1.1, delay:.2, stiffness: 100}}
        className='flex lg:items-center flex-col lg:flex-row lg:-mt-8'>
        <p className={`text-shadow hero-text font-bold lg:text-[160px] text-primary tracking-wider`}>BALOGUN</p>
        <div className='lg:pl-8'>
         <p 
          className='text-primary text-shadow lg:w-56 tracking-widest'>
          <span className='uppercase text-sm text-secondary font-bold'>specialty</span> HTML, CSS, JavaScript, React/Next, 
          Redux/Redux-toolkit, Tailwind and Bootstrap, Git, Github amongst others...
         </p>
        </div>
        </motion.div>
        </div>
      </div>
      <main className='bg-primary relative pb-14'>
       
         <About/>
         <Portfolio/>
         <Interests/>
         <Contact/>
      </main>
      </div>
    </>
  )
}
