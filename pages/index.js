import Head from 'next/head'
import Header from '../components/Header'
import { lato } from './_app'

export default function Home() {

  return (
    <>
      <Head>
        <title>Olasunkanmi &mdash; Front-end Developer</title>
        <meta name="description" content="The portfolio of Olasunkanmi Balogun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${lato.variable} font-sans h-screen`}>
      <Header/>
      <div className='pt-24 px-8 bg-light-dark w-full h-full'>
      <div className='leading-tight'>
       <p className={`italic text-primary text-lg text-shadow`}>the portfolio of</p>
       
       <p className={`w-full font-bold lg:text-[160px]
        text-primary tracking-widest`}>OLASUNKANMI</p>
        <div className='flex items-center'>
        <p className={`font-bold lg:text-[160px] text-primary tracking-wider`}>BALOGUN</p>
        <div className='pl-20'>
        <p className='text-secondary text-shadow italic'>
          {'{'}
        </p>
        <p className='text-secondary pt-1 italic text-shadow text-lg'>Front-end developer,</p>
        <p className='text-secondary pt-1 italic text-shadow text-lg'>Technical Writer,</p>
        <p className='text-secondary pt-1 italic text-shadow text-lg'>Coder,</p>
        <p className='text-secondary pt-1 italic text-shadow text-lg'>Learner,</p>
        <p className='text-secondary pt-1 text-shadow italic'>
          {'}'}
        </p>
        </div>
        </div>
       </div>
      </div>
      </div>
    </>
  )
}
