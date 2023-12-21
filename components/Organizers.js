import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";

function Organizers() {
  return (
    <main className="h-full w-full md:px-14 px-5 ">
      <div className=" flex flex-col justify-start space-y-5 mb-5">
        <span>
          {" "}
          <h1 className="md:text-3xl font-bold custom-text-shadow text-5xl">
            Organizers
          </h1>
        </span>

        {/*Hardcoding the organizers' data */}
      </div>
      <div className="grid md:grid-cols-4 gap-10 md:grid-rows-4 mt-2 md:mt-5">
        <div className="border border-purple-500 rounded-lg md:px-5 md:py-6 px-8 py-12">
          <Image
            src="/santos.svg"
            width={80}
            height={80}
            alt="Picture of the author"
            className="rounded-full  mb-3"
          />
          <h2 className="block mb-2 font-bold md:text-md text-xl">
            Santos Hernandez
          </h2>
          <p className="block mb-3">Founder</p>
          <Link href="https://santos.lol/" target="_blank">
            <Globe className="w-" size={24} />
          </Link>
        </div>
        <div className="border border-purple-500 rounded-lg md:px-5 md:py-6 px-8 py-12">
          <Image
            src="/edgar.jpg"
            width={80}
            height={80}
            alt="Picture of the author"
            className="rounded-full  mb-3"
          />
          <h2 className="block mb-2 font-bold md:text-md text-xl">
            Edgar Saravia
          </h2>
          <p className="block mb-3">Builder</p>
          <Link href="https://github.com/EdgarAllan07" target="_blank">
            <Globe className="w-" size={24} />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Organizers;
