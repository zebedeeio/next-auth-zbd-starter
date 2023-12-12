import React from "react";
import { ChevronRight } from "lucide-react";

const HeroModule = () => {
  return (
    <div className="isolate px-6 lg:px-8">
      <div className="mx-auto max-w-3xl py-8 sm:py-16 lg:py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to the
            <div>Global Hackathon League!</div>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Make your dreams reality.
          </p>
          <p className="text-lg leading-8 text-gray-600">
            Empower yourself, find teams, have fun, and grow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/hackathons"
              className="rounded-full bg-purple-500 hover:bg-purple-700 px-4 py-3 text-sm font-semibold text-white border border-black border-1 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-45"
            >
              Find Hackathons
              <ChevronRight className="inline" />
            </a>
            {/* <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroModule;
