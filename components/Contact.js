import { useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { ChevronRight } from "lucide-react";
import ButtonPrimary from "@/components/ButtonPrimary";

function Contact() {
  return (
    <div className="w-full md:pl-14">
      <section className="space-y-3 flex flex-col justify-start items-start px-10">
        <div className="mb-2">
          <h1 className="text-3xl font-bold pb-3">Contact Us</h1>
          <p className="text-gray-400 font-semibold  text-lg ">Interested in helping us spreading innovation? Reach out</p>
        </div>
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
                    className="block  rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-80 placeholder:opacity-70"
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
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-70"
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
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-70"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 space-y-2">
              <label
                htmlFor="teamMembers"
                className="block text-sm font-medium leading-6 text-white"
              >
                Comments
              </label>
              <div className="mb-4">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <textarea
                    id="teamMembers"
                    name="teamMembers"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none bg-field placeholder:opacity-70"
                    defaultValue={""}
                    required
                  />
                </div>
                <div className="mb-4 mt-6 flex justify-center md:justify-start">
                  <div>
                    <button className="w-15 md:w-30 bg-purple-500 hover:bg-purple-600 text-white border-1 border-black font-bold md:py-2 px-6 rounded-full text-base py-3">
                      <div className="flex justify-between align-middle items-center">
                        <span className="mr-2 text-white text-base ">
                          Submit
                        </span>
                        <ChevronRight
                          color="white"
                          className="hidden sm:inline-block w-6 h-6"
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
  )
}

export default Contact