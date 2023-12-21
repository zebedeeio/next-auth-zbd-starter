import { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import BenefitsModule from "@/components/BenefitsModule";
import bitblockboom from "@/data/content/bitBlockBoom.json";
import sponsors from "@/data/content/sponsors.json";
import Sponsors from "@/components/Sponsors";
import { Check } from "lucide-react";
import PrizePool from "@/components/PrizePool";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Image from "next/image";
import { useRouter } from "next/router";

export default function HackathonDetail() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [teams, setTeams] = useState([]);
  const signedUp = teams.length > 0;

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

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
          <div className="px-6 lg:px-8 py-12 ">
            <div className="m-auto max-w-3xl py-16">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-white text-transparent bg-clip-text h-20">
                  <div>BitBlockBoom Buildathon</div>
                </h1>
                <p className="my-6 text-lg leading-8 text-gray-200">
                  Make your dreams reality. <br />
                  Empower yourself, find teams, have fun, and grow.
                </p>

                <div className="mt-2 flex items-center justify-center gap-x-6">
                  {!signedUp ? (
                    <ButtonPrimary
                      buttonText={"Register"}
                      buttonLink={`/hackathons/${id}/register`}
                    />
                  ) : (
                    <ButtonPrimary
                      buttonText={"Submit Project"}
                      buttonLink={`/hackathons/${id}/submit`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 mb-8"></div>
          <div className="mx-auto max-w-4xl gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
            <div className="lg:pr-8 lg:pt-4">
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                {bitblockboom.headerText}
              </p>
              <p className="mt-6 text-lg leading-8 ">
                {bitblockboom.descriptionText}
              </p>
              <dl className="grid grid-cols-1 lg:grid-cols-3 my-10 text-base leading-7  lg:max-w-none ">
                {bitblockboom.data.map((item) => (
                  <div className="relative pl-9 my-4">
                    <dt className=" font-semibold">
                      <Check className="absolute left-1 top-1 h-5 w-5 text-green-400" />
                      {item[0]}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="my-24">
            <SectionHeader headerText={"Rules"} descriptionText={""} />
            <ul className="text-xl list-decimal ml-6">
              <li>Must be built during the BitBlockBoom hackathon.</li>
              <li>Must have a BitBlockBoom ticket in order to compete.</li>
              <li>Must incorporate Lightning and Nostr.</li>
            </ul>
          </div>
          <PrizePool data={bitblockboom.prizes} />
          <div className="mt-24">
            <SectionHeader
              headerText={"Judging Criteria"}
              descriptionText={
                "The judges will evaluate your project submission using the following criteria."
              }
            />
            <ul className="text-xl list-disc ml-6">
              <li>Feasibility.</li>
              <li>Impact.</li>
              <li>User Experience.</li>
              <li>Scalability.</li>
              <li>Innovative.</li>
              <li>The Pitch.</li>
            </ul>
          </div>
          <div className="py-24 sm:py-32">
            <div className="max-w-7xl">
              <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl ">
                Sponsors
              </h2>
              <div className="mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {sponsors.data.map((item) => (
                  <Image
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    alt={item[0]}
                    src={item[1]}
                    width={158}
                    height={48}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
