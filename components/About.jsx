import motion from 'framer-motion';

export function Header( { children } ) {

    return (
        <h3 className='text-center font-bold tracking-widest text-secondary font-bold md:text-xl'>
            {children}
        </h3>
    )
}
export default function About() {

    return (
        <section className='py-20 md:py-0 lg:h-screen md:flex md:items-center md:justify-center'>
        <div className='z-20 -rotate-[8deg] w-[110%] bg-primary h-96 absolute -top-36 mt-2'/>
        <div className='px-8 relative z-30'>

        <Header>
          SUMMARY
        </Header>

        <div className='flex justify-center'>            
        <p className='py-4 text-base md:text-2xl text-secondary text-center lg:w-[700px]'>
         As a frontend developer with experience in technologies such as HTML, CSS, JavaScript, React/Next, and Tailwind, 
         as well as a background as a technical writer, I have a strong foundation in both coding and technical communication.
         I have put these skills to use during my time working for a startup, where I have helped to create high-quality,
        user-friendly web experiences and produce clear, concise documentation for software products. 
        I am committed to continuing to develop my skills 
        and expertise in these areas, and to making a meaningful contribution to the success of the organizations I work with.
        </p>
        </div>
        </div>
        </section>
    )
}