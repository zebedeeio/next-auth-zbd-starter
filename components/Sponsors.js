import Image from "next/image";
import React from "react";
import { ChevronRight } from 'lucide-react'

const Sponsors = ({ data }) => {
  return (
    // <div className="py-24 sm:py-32">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
    //       {data.headerText}
    //     </h2>
    //     <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
    //       {data.data.map((item) => (
    //         <Image
    //           className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
    //           alt={item[0]}
    //           src={item[1]}
    //           width={158}
    //           height={48}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="w-full md:pl-14 ">
        <section className="space-y-3 flex flex-col justify-start items-start px-10">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-gray-400 font-semibold opacity-90 text-lg ">Interested in helping us spreading innovation? Reach out</p>
          <form className="">
            <div className=" grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
              <div className="sm:col-span-4 space-y-2">
                <label
                  htmlFor="teamName"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Name
                </label>
                <div className="">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="teamName"
                      id="teamName"
                      autoComplete="team-name"
                      placeholder="Enter your name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4 space-y-2">
                <label
                  htmlFor="teamDescription"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email
                </label>
                <div className="mb-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="email"
                      name="teamDescription"
                      id="teamDescription"
                      autoComplete="team-description"
                      placeholder="you@mail.com"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4 space-y-2">
                <label
                  htmlFor="teamAvatarURL"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Company name
                </label>
                <div className="mb-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="teamAvatarURL"
                      id="teamAvatarURL"
                      autoComplete="team-avatar-url"
                      placeholder="Enter your company name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      required
                    />
                  </div>
                  <div className="mb-4 mt-6">
                    <div>
                      <button className="w-15 md:w-30 bg-purple-500 hover:bg-purple-600 text-white border-1 border-black font-bold py-2 px-6 rounded-full">
                        <div className="flex justify-between align-middle">
                          <span className="mr-2 text-white xl:text-lg lg:text-sm md:text-sm sm:text-sm xs:text-xs ">
                            Submit
                          </span>
                          <ChevronRight
                            color="black"
                            size={28}
                            className="hidden sm:inline-block "
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Sponsors;
