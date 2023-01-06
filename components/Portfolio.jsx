import Image from "next/legacy/image"
import cocktail from '../public/assets/images/Cocktails.png'
import spaceTourism from '../public/assets/images/space-tourism-website.png'
import restCountries from '../public/assets/images/rest-countries.png'
import interacty from '../public/assets/images/interacty.png'
import { Header } from "./About"
import { motion, useScroll } from 'framer-motion'

export function PortfolioCard({ children, className, href }) {
    const { scrollY } = useScroll()

    return (
        <a
         href={href} target='_blank' rel='noopener noreferrer'>
        <motion.div
              style={{ x: scrollY }}
              transition={{ duration: .5 }}
               className={`${className} py-8 md:py-20 border-2 border-x-transparent border-t-secondary 
        border-b-transparent flex flex-col md:flex-row overflow-hidden`}>
            {children}
        </motion.div>
        </a>
    )
}

export function ImageContainer({src}) {
    return (
        <div className="w-[100%] md:w-[50%]">
        <Image src={src}
         alt={`Image for ${src}`}
         className="rounded-md"/>
        </div>
    )
}

export default function Portfolio() {

    return (

        <section className="z-30 py-8 px-8">
          <Header>
            PORTFOLIO
          </Header>
          <div className="flex justify-center">
          <motion.p 
          initial={{ opacity: 0, x: 100}}
          whileInView={{ opacity:1, x: 0 }}  
          transition={{ type:'spring', ease: 'easeOut', duration: .7, stiffness: 100, }}
          className="py-4 text-base md:text-xl text-secondary text-center lg:w-[700px]">
            The following are some of my portfolio explorations. Each project card contains details 
            of it's features and tech stack utilized.
          </motion.p>
          </div>

          <section className="md:mt-24">

           <PortfolioCard href='https://rest-country-apis.vercel.app'>
            <ImageContainer src={restCountries}/>
            <div className="md:pl-8">
                <p>
                    Description
                </p>
            </div>
           </PortfolioCard>


           <PortfolioCard href='https://interacty.netlify.app'>
            <ImageContainer src={interacty}/>
            <div className="md:pl-8">
                <p>
                    Description
                </p>
            </div>
           </PortfolioCard>

           <PortfolioCard href='https://cocktaildb-prj.netlify.app'>
            <ImageContainer src={cocktail}/>
            <div className="md:pl-8">
                <p>
                    Description
                </p>
            </div>
           </PortfolioCard>


           <PortfolioCard className='border-b-secondary' href='https://space-de-tourism.netlify.app'>
            <ImageContainer src={spaceTourism}/>
            <div className="pl-8">
                <p>
                    Description
                </p>
            </div>
           </PortfolioCard>
          </section>

        </section>
    )
}