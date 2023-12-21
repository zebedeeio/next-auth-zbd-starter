import React, { useState, useEffect } from "react";
import HackathonCard from "@/components/HackathonCard";

const Hackathons = ({ data }) => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const hackathons = await fetch(`/api/hackathons/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (hackathons.ok) {
          const hackathonsData = await hackathons.json();
          setHackathons(hackathonsData);
        } else {
          console.error("Error fetching hackathons:", hackathons.statusText);
        }
      } catch (error) {
        console.error("Error fetching hackathons:", error);
      }
    };

    fetchHackathons(); // Call the fetchHackathons function
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <div className="py-12 text-left">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            {data.headerText}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-200">
            {data.descriptionText}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full my-4">
          {hackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon.id}
              headerText={hackathon.title}
              descriptionText={hackathon.description}
              buttonLink={`/hackathons/${hackathon.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
