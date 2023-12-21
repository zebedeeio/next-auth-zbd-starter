import React from "react";
import Image from "next/image";

const PrizePool = ({ data }) => {
  return (
    <div>
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Prizes
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p> */}
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-12 xl:col-span-3"
        >
          {data.map((prize) => (
            <li key={prize[0]}>
              <div className="flex items-center gap-x-3">
                <Image
                  className="col-span-2 max-h-12 w-40 object-contain lg:col-span-1"
                  alt="Bitcoin image"
                  src={"/bitcoin.svg"}
                  width={21}
                  height={21}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-200">
                    {prize[0]}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {prize[1]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrizePool;
