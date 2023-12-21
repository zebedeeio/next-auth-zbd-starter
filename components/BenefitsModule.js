import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";

const BenefitsModule = ({ data }) => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600"></h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {data.headerText}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {data.descriptionText}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {data.data.map((item) => (
                  <div className="relative pl-9">
                    {
                      <dt className="inline font-semibold text-gray-900">
                        <Check className="absolute left-1 top-1 h-5 w-5 text-green-400" />
                        {item[0]}:
                      </dt>
                    }
                    <dd className="inline">{item[1]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            className="sm:w-[57rem] md:-ml-4 lg:-ml-0"
            alt="Build the Future Now Image"
            src="/btfn.png"
            width={3258 * (1 / 24)}
            height={2720 * (1 / 24)}
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsModule;
