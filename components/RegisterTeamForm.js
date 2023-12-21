import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const RegisterTeamForm = ({ hackathonId }) => {
  const router = useRouter();

  const [team, setTeam] = useState("");
  const [teams, setTeams] = useState([]);
  const [loadingTeams, setLoadingTeams] = useState(true);

  // Get Teams
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
      } finally {
        setLoadingTeams(false);
      }
    };

    fetchTeams(); // Call the fetchTeams function
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  const create = async (e) => {
    e.preventDefault();
    try {
      if (!team.trim()) {
        console.error("Team cannot be empty.");
        return;
      }

      const body = {
        team,
      };

      const data = await fetch(`/api/hackathons/${hackathonId}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(data);

      router.push("/success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={create}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="team"
            className="block text-lg font-medium leading-6 text-white"
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
            {loadingTeams ? (
              <p>Loading teams...</p>
            ) : (
              <select
                id="team"
                name="team"
                autoComplete="team"
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                required
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                onClick={(e) => setTeam(e.target.value)}
              >
                <option>Select team</option>
                {teams.length === 0 && <option>No teams available</option>}
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </select>
            )}
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
