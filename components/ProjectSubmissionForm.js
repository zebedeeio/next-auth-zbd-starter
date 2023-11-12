import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const ProjectSubmissionForm = ({ hackathonId }) => {
  const router = useRouter();

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [loomLink, setLoomLink] = useState("");
  const [pitchLink, setPitchLink] = useState("");
  const [projectResourceLink, setProjectResourceLink] = useState("");
  const [comments, setComments] = useState("");

  const create = async (e) => {
    e.preventDefault();
    try {
      const body = {
        projectName,
        projectDescription,
        loomLink,
        pitchLink,
        projectResourceLink,
        comments,
      };

      await fetch(`/api/hackathons/${hackathonId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      router.push("/success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={create}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label
            htmlFor="projectName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Project Name
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="projectName"
                id="projectName"
                autoComplete="project-name"
                onChange={(e) => setProjectName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="projectDescription"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Project Description
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="projectDescription"
                id="projectDescription"
                autoComplete="project-description"
                onChange={(e) => setProjectDescription(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="loomLink"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Loom Link
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="loomLink"
                id="loomLink"
                autoComplete="loom-link"
                onChange={(e) => setLoomLink(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="pitchLink"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Pitch Link
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="pitchLink"
                id="pitchLink"
                autoComplete="pitch-link"
                onChange={(e) => setPitchLink(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="projectResourceLink"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Project Resource Link
          </label>
          <div className="mb-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="projectResourceLink"
                id="projectResourceLink"
                autoComplete="project-resource-link"
                onChange={(e) => setProjectResourceLink(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label
            htmlFor="comments"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Comments
          </label>
          <div className="mb-4">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <textarea
                id="comments"
                name="comments"
                rows={3}
                onChange={(e) => setComments(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                required
              />
            </div>
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
    </form>
  );
};

export default ProjectSubmissionForm;
