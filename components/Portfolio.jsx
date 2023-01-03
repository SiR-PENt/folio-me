import Image from "next/legacy/image"
import cocktail from '../public/assets/images/Cocktails.png'
import spaceTourism from '../public/assets/images/space-tourism-website.png'
import restCountries from '../public/assets/images/rest-countries.png'
import interacty from '../public/assets/images/interacty.png'


export function PortfolioCard({ children, className }) {
    return (
        <div className={`${className} py-8 md:py-20 border-2 border-x-transparent border-t-secondary 
        border-b-transparent flex flex-col md:flex-row overflow-hidden`}>
            {children}
        </div>
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
          <h3 className="text-center font-bold tracking-widest text-base text-secondary text-lg font-bold md:text-xl">
            PORTFOLIO
          </h3>
          <div className="flex justify-center">
          <p className="py-4 text-base md:text-2xl text-secondary text-center lg:w-[700px]">
            The following are some of my portfolio explorations with details about the tech stack utilized for each of them.
          </p>
          </div>

          <section className="md:mt-24">

           <PortfolioCard>
            <ImageContainer src={restCountries}/>
            <div className="md:pl-8">
                <p>
                    Description
                </p>
            </div>
           </PortfolioCard>


           <PortfolioCard>
            <ImageContainer src={interacty}/>
            <div className="md:pl-8">
                <p>
                    Description
                </p>
            </div>
           </PortfolioCard>

           <PortfolioCard>
            <ImageContainer src={cocktail}/>
            <div className="md:pl-8">
                <p>
                    Description
                </p>
            </div>
           </PortfolioCard>


           <PortfolioCard className='border-b-secondary'>
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