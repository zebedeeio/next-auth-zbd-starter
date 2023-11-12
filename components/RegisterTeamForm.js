import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const RegisterTeamForm = () => {
  const router = useRouter();

  const [team, setTeam] = useState("");
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

  const create = async (e) => {
    e.preventDefault();
    try {
      const body = {
        team,
      };

      await fetch(`/api/hackathon/${hackathonId}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form method="POST" onSubmit={create}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="team"
            className="block text-lg font-medium leading-6 text-gray-900"
          >
            Team
          </label>
          <div>
            Don't have a team?{" "}
            <Link className="hover:text-lime-600" href="/team/create">
              Create one &rarr;
            </Link>
          </div>
          <div className="mt-2 mb-4">
            <select
              id="team"
              name="team"
              autoComplete="team"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              required
              onChange={(e) => setTeam(e.target.value)}
            >
              <option>Select</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          <button className="w-15 md:w-30 bg-lime-400 hover:bg-lime-600 text-white border-solid border-2 border-black font-bold py-2 px-6 rounded-full">
            <div className="flex justify-between align-middle">
              <span className="mr-2 text-black xl:text-lg lg:text-lg md:text-lg sm:text-sm xs:text-xs ">
                Finish
              </span>
              <ArrowRight
                color="black"
                size={28}
                className="hidden sm:inline-block border-solid border-2 border-black bg-white hover:bg-gray-300 rounded-full"
              />
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterTeamForm;
