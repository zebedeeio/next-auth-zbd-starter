import React from "react";
import { ChevronRight } from "lucide-react";

const HeroModule = () => {
  return (
    <div className="px-6 lg:px-8 py-12 ">
      <div className="m-auto max-w-3xl py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-white text-transparent bg-clip-text h-32">
            Welcome to the
            <div>Global Hackathon League!</div>
          </h1>
          <p className="my-6 text-lg leading-8 text-gray-200">
            Make your dreams reality. <br />
            Empower yourself, find teams, have fun, and grow.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/hackathons"
              className="rounded-full bg-purple-500 hover:bg-purple-700 px-4 py-3 text-sm font-semibold text-white border border-black border-1 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 w-45"
            >
              Find Hackathons
              <ChevronRight className="inline" />
            </a>
            <a href="#" className="text-sm font-semibold leading-6">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroModule;
