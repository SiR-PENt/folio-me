import { Header } from "./About"

export default function Interests() {

    return (

        <section className="py-8 px-8">
            <Header>
                INTERESTS
            </Header>
          <div className="flex justify-center">
            <p className="py-4 text-base md:text-2xl text-secondary text-center lg:w-[700px]">
            I am particularly interested 
            in using modern JavaScript libraries such as React and Vue.js to build performant, 
            interactive user interfaces. I am actively involved in the 
            open source community and have contributed to several projects on GitHub,
             including 
             <a href="https://github.com/CommunityPro" 
             target='_blank' rel='noreferrer noopener'
             className="opacity-80 font-bold">
             {' '}Community Pro.
             </a>
             
            </p>
          </div>
        </section>
    )
}