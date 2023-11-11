import React from "react";
import HackathonCard from "@/components/HackathonCard";

const UpcomingHackathons = ({ data }) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.headerText}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {data.descriptionText}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.data.map((item) => (
            <HackathonCard
              headerText={item[0]}
              descriptionText={
                item[1]
              }
              buttonLink={"/hackathons/bitblockboom"}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingHackathons;
