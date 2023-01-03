import Image from "next/legacy/image"
import cocktail from '../public/assets/images/Cocktails.png'
import spaceTourism from '../public/assets/images/space-tourism-website.png'
import restCountries from '../public/assets/images/rest-countries.png'
import interacty from '../public/assets/images/interacty.png'

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

          <section className="mt-12">

           <div className="py-12 border-2 border-x-transparent border-b-transparent 
           border-t-secondary flex flex-col md:flex-row overflow-hidden">
            <div className="w-[100%] md:w-[50%]">
            <Image src={restCountries}
             height='700'

             alt='Image for cocktail project'
             className="rounded-md z-10"/>
            </div>

            <div className="pl-8">
                <p>
                    Description
                </p>
            </div>
           </div>

           <div className="py-12 border-2 border-t-secondary border-x-transparent 
           border-b-transparent flex flex-col md:flex-row overflow-hidden">
            <div className="w-[100%] md:w-[50%]">
            <Image src={interacty}
             alt='Image for cocktail project'
             className="rounded-md"/>
            </div>

            <div className="pl-8">
                <p>
                    Description
                </p>
            </div>
           </div>

           <div className="py-12 border-2 border-x-transparent border-t-secondary 
           border-b-secondary flex flex-col md:flex-row overflow-hidden">
            <div className="w-[100%] md:w-[50%]">
            <Image src={cocktail}
            height='700'
             alt='Image for cocktail project'
             className="rounded-md"/>
            </div>

            <div className="pl-8">
                <p>
                    Description
                </p>
            </div>
           </div>


           <div className="py-12 border-2 border-x-transparent border-t-transparent border-b-secondary
            flex flex-col md:flex-row overflow-hidden">
            <div className="w-[100%] md:w-[50%]">
            <Image src={spaceTourism}
            height='700'
             alt='Image for space project'
             className="rounded-md"/>
            </div>

            <div className="pl-8">
                <p>
                    Description
                </p>
            </div>
           </div>
          </section>
          
        </section>
    )
}