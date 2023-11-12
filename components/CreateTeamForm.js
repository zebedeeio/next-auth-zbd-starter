import React, { useState } from "react";

import { useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";
import ButtonPrimary from "@/components/ButtonPrimary";

const CreateTeamForm = () => {
  const router = useRouter();

  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [teamAvatarURL, setTeamAvatarURL] = useState("");
  const [teamMembers, setTeamMembers] = useState("");

  const create = async (e) => {
    e.preventDefault();
    try {
      const body = {
        teamName,
        teamDescription,
        teamAvatarURL,
        teamMembers,
      };

      await fetch(`/api/team/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      router.push("/");
    } catch (error) {
      console.error(error);
    }

    // const forumId = await createForum({ subject, description });
  };

  return (
    <form onSubmit={create}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label
            htmlFor="teamName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Team Name
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="teamName"
                id="teamName"
                autoComplete="team-name"
                onChange={(e) => setTeamName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                required
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="teamDescription"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Team Description
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="teamDescription"
                id="teamDescription"
                autoComplete="team-description"
                onChange={(e) => setTeamDescription(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                required
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="teamAvatarURL"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Team Avatar URL
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="teamAvatarURL"
                id="teamAvatarURL"
                autoComplete="team-avatar-url"
                onChange={(e) => setTeamAvatarURL(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                required
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="teamMembers"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Team Member Names & Contact Info
          </label>
          <div className="mb-4">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <textarea
                id="teamMembers"
                name="teamMembers"
                rows={3}
                onChange={(e) => setTeamMembers(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                required
              />
            </div>
            <div className="mb-4 mt-6">
              <div>
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
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateTeamForm;
