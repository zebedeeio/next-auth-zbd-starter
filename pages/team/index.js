import React, { useEffect, useState } from "react";

import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import ButtonSecondary from "@/components/ButtonSecondary";
import HackathonCard from "@/components/HackathonCard";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teams = await fetch(`/api/team/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (teams.ok) {
          const teamsData = await teams.json();
          setTeams(teamsData);
        } else {
          console.error("Error fetching teams:", teams.statusText);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams(); // Call the fetchTeams function
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <Layout>
      <div>
        <div className="mx-auto px-6 lg:px-8">
          <div className="my-2">
            <h1 className="font-bold custom-text-shadow text-4xl">Teams</h1>
            <p className="text-gray-400 font-semibold text-lg ">
              Create a team in order to compete in hackathons.
            </p>
          </div>

          <div className="my-4">
            <ButtonSecondary
              buttonText={"Create team"}
              buttonLink={"/team/create"}
            />
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
            {teams.map((team) => (
              <HackathonCard
                headerText={team.name}
                descriptionText={team.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
