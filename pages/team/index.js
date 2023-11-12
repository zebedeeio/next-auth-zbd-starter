import React, { useEffect, useState } from "react";

import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import ButtonPrimary from "@/components/ButtonPrimary";
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
      <div className="py-4 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ButtonPrimary buttonText={"Back"} buttonLink={"/"} />
          <PageHeader
            headerText={"Teams"}
            descriptionText={"Create a team in order to compete in hackathons."}
          />

          <ButtonPrimary
            buttonText={"Create team"}
            buttonLink={"/team/create"}
          />
          <div className="my-8">
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
