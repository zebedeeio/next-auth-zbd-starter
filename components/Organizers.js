import Image from 'next/image'
import Link from 'next/link'
import { Globe } from 'lucide-react'

function Organizers() {
  return (
    <main className='h-screen w-full md:pl-14 pl-5'> 
    <div className=" flex flex-col justify-start space-y-5 mb-5">
    <span> <h1 className="md:text-3xl font-bold custom-text-shadow text-5xl">Organizers</h1></span>
      <p className="text-gray-400 font-semibold text-lg ">Organizer Copy Text</p>
       {/*Hardcoding the organizers' data */}
    </div>
    <div className='container flex mt-2 md:mt-5'>
    <div className="md:border border-purple-500 rounded-lg md:p-5">
      <Image
      src="/"
      width={80}
      height={80}
      alt="Picture of the author"
       className='rounded-full border border-white mb-3'
         />
     <h2 className='block mb-2 font-bold md:text-md text-xl'>Santos Hernandez</h2>
     <p className='block mb-3'>Founder </p>
     <Link href="/"><Globe className='w-' size={24}/></Link>
      </div>
    </div>
    </main>
  )
}

export default Organizers
