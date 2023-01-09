import Image from "next/legacy/image"
import cocktail from '../public/assets/images/Cocktails.png'
import restCountries from '../public/assets/images/rest-countries.png'
import interacty from '../public/assets/images/interacty.png'
import { Header } from "./About"
import { motion } from 'framer-motion'

export function PortfolioCard({ children, className, href }) {

    return (
        <a
        transition={{ type:'spring',
          delay:.1,
          ease: 'easeOut', duration: .7, stiffness: 100, }}
         href={href} target='_blank' rel='noopener noreferrer'>
        <div
        className={`${className} py-8 md:py-20 border-2 border-x-transparent border-t-secondary 
        border-b-transparent flex flex-col md:flex-row overflow-hidden`}>
            {children}
        </div>
        </a>
    )
}

export function ImageContainer({src}) {
    return (
        <motion.div
        initial={{
            x: -100, 
            opacity: 0
        }} 
        whileInView={{
            x: 0, 
            opacity: 1 
        }}
        transition={{ type:'spring',
         ease: 'easeOut', duration: .7, stiffness: 100, }}
        className="w-[100%] md:w-[50%]">
        <Image src={src}
         alt={`Image for ${src}`}
         className="rounded-md border"/>
        </motion.div>
    )
}

export function PortfolioDescription({ children }) {

    return (
     <motion.div
     className="flex items-center md:w-[50%] md:pl-8 pt-8"
     initial={{
        x: 100, 
        opacity: 0
    }} 
    whileInView={{
        x: 0, 
        opacity: 1 
    }}
    transition={{ type:'spring', delay:.5, ease: 'easeOut', duration: .7, stiffness: 100, }}
     >
        { children }
     </motion.div>
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
            <PortfolioDescription>
                <p>
                In this project, I developed a web app using Next.js that allows users to easily explore a database 
                of countries displayed on their screens from an API.
                <br/>
                <br/>
                I implemented a search feature that 
                allows users to search for a specific country using the API.
                I also incorporated Next.js features such as server-side rendering 
                and the getStaticPaths feature to reduce page load time.
                <br/>
                <br/>
                The tech stack I used for this project included 
                <b>
                {' '}Next.js, JavaScript, Framer Motion, React Bootstrap, and CSS.
                </b>
                I utilized these tools to create a smooth and responsive user interface for the web app.
                </p>
            </PortfolioDescription>
           </PortfolioCard>


            <PortfolioCard href='https://cocktaildb-prj.netlify.app'>
             <ImageContainer src={cocktail}/>
             <PortfolioDescription>
                 <p>
                 In this project, I developed a web app using React.js that allows users to easily 
                 explore a database of cocktails displayed on their screens from an API. 
                 To enhance the user experience, I integrated another API that displays cocktails based on a user's search result.
                 <br/>
                 <br/>
                 To enable navigation between pages and allow users to view more details
                 about a specific cocktail, I utilized the React Router library.
                 <br/>
                 <br/>
                 The tech stack I used for this project included the 
                 <b>{' '}React.js library, React Router, JavaScript, and CSS.</b>
                 </p>            
             </PortfolioDescription>
            </PortfolioCard>


           <PortfolioCard 
           className='border-b-secondary'
           href='https://interacty.netlify.app'>
            <ImageContainer src={interacty}/>
            <PortfolioDescription>
                <p>
                In this project, I created an interactive CRUD website using React.js and
                a state management tool that enables users to give reviews to projects. 
                I implemented features that allow users to comment, 
                reply to comments, and reply to replies, creating a dynamic and engaging user experience.
                <br/>
                <br/> 
                To ensure that data is persisted even when the page is refreshed, 
                I incorporated persistent data storage using browser LocalStorage.
                This allows the website to maintain its state and provide a seamless user experience.
                <br/>
                <br/> 
                The tech stack I used for this project included <b>JavaScript, React.js, browser LocalStorage, 
                useReducer and useContext for state management, and SASS.</b>
                I utilized these tools to create a dynamic and responsive website that provides a rich user experience.
                </p>
            </PortfolioDescription>          
           </PortfolioCard>
          </section>

        </section>
    )
}