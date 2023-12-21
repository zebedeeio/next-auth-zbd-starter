import React from "react";
import ButtonSecondary from "@/components/ButtonSecondary";

const CallToAction = ({ data }) => {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
            {data.headerText}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            {data.descriptionText}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7  sm:grid-cols-2 md:flex lg:gap-x-10">
            {data.data.map((item) => (
              <a href={item[1]}>
                {item[0]} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
        {/* <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <ButtonSecondary buttonText={"Get ZBD"} buttonLink={""} />
        </div> */}
      </div>
    </div>
  );
};

export default CallToAction;
