import React, { useState } from "react";

import { useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";
import ButtonSecondary from "@/components/ButtonSecondary";
import ButtonPrimary from "./ButtonPrimary";

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
      <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label
            htmlFor="teamName"
            className="block text-sm font-medium leading-6 text-white"
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
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-80 placeholder:opacity-60 placeholder:font-semibold"
                defaultValue={""}
                required
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="teamDescription"
            className="block text-sm font-medium leading-6 text-white"
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
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-80 placeholder:opacity-60 placeholder:font-semibold"
                defaultValue={""}
                required
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="teamAvatarURL"
            className="block text-sm font-medium leading-6 text-white"
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
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-80 placeholder:opacity-60 placeholder:font-semibold"
                defaultValue={""}
                required
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="teamMembers"
            className="block text-sm font-medium leading-6 text-white"
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
                className="block rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-purple-500 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-field w-80 placeholder:opacity-60 placeholder:font-semibold"
                defaultValue={""}
                required
              />
            </div>
            <div className="mb-4 mt-6">
              <ButtonPrimary buttonText={"Finish"} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateTeamForm;
