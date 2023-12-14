import Image from 'next/image'
import Link from 'next/link'
import { Globe } from 'lucide-react'

function Organizers() {
  return (
    <div className="w-screen flex flex-col justify-start px-10 space-y-5">
      <h1 className="text-3xl font-bold">Organizers</h1>
      <p className="text-gray-400 font-semibold opacity-90 text-lg ">Organizer Copy Text</p>
       {/*Hardcoding the organizers' data */}
      <div className="border border-purple-500 container max-w-sm p-5 ">
      <Image
      src="/profile.png"
      width={50}
      height={50}
      alt="Picture of the author"
       className='rounded-full border border-white mb-2'
         />
     <h2 className='inline mb-2'>Santos Hernandez</h2>
     <p className='block mb-2'>Founder </p>
     <Link href="/"><Globe /></Link>
      </div>

    </div>
  )
}

export default Organizers
