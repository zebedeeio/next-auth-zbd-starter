import Image from "next/image";
import React from "react";

const Sponsors = ({ data }) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          {data.headerText}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {data.data.map((item) => (
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              alt={item[0]}
              src={item[1]}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
