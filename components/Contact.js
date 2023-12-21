import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

function Contact() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: " ",
    email: "",
    company: "",
    comments: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/contact/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      console.log(response);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full md:pl-14">
      <section className="space-y-3 flex flex-col justify-start items-start px-10">
        <div className="mb-2">
          <h1 className="font-bold mb-3 custom-text-shadow text-4xl">
            Contact Us
          </h1>
          <p className="text-gray-400 font-semibold  text-lg ">
            Interested in helping us spreading innovation? Reach out
          </p>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
            <div className="sm:col-span-4 space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Name
              </label>
              <div className="">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="Namne"
                    placeholder="Enter your name"
                    className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-80 placeholder:opacity-60 placeholder:font-semibold"
                    defaultValue={""}
                    onChange={handleChange}
                    values={values.name}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="Email"
                    placeholder="your@mail.com"
                    className="block w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold"
                    defaultValue={""}
                    onChange={handleChange}
                    value={values.email}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 space-y-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium leading-6 text-white"
              >
                Company name
              </label>
              <div className="mb-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="Company"
                    placeholder="Enter your company name"
                    className="block w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field placeholder:opacity-60 placeholder:font-semibold"
                    defaultValue={""}
                    onChange={handleChange}
                    value={values.company}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4 space-y-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium leading-6 text-white"
              >
                Comments
              </label>
              <div className="mb-4">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <textarea
                    id="comments"
                    name="comments"
                    rows={5}
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none bg-field placeholder:opacity-70"
                    defaultValue={""}
                    onChange={handleChange}
                    value={values.comments}
                    required
                  />
                </div>
                <div className="mb-4 mt-6 flex justify-center md:justify-start">
                  <div>
                    <button className="w-15 md:w-30 bg-purple-500 hover:bg-purple-600 text-white border-1 border-black font-bold md:py-2 ,md:px-4 px-6 rounded-full text-base py-4">
                      <div className="flex justify-center align-middle items-center">
                        <span className="mr-2 text-white text-base ">
                          Submit
                        </span>
                        <ChevronRight color="white" className=" w-6 h-6" />
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
  );
}

export default Contact;
