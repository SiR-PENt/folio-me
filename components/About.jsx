import motion from 'framer-motion';

export default function About() {

    return (
        <section className='py-20 md:py-0 md:h-screen md:flex md:items-center md:justify-center'>
        <div className='z-20 -rotate-[8deg] w-[110%] bg-primary h-60 absolute -top-28 mt-2'/>
        <div className='px-8 relative z-30'>
        <h3 className='text-center font-bold tracking-widest text-secondary font-bold md:text-xl'>
            PROFILE
        </h3>
        <div className='flex justify-center'>            
        <p className='py-4 text-base md:text-2xl text-secondary text-center lg:w-[700px]'>
        Frontend Engineer with  demonstrated working experience at building small-scale to medium scale web applications. I am passionate about building sites, reusable components that conform to standards. I advocate for clean code and architecture.
         I actively seek more knowledge - if I do not know it, I will learn it.
        </p>
        </div>
        </div>
        </section>
    )
}