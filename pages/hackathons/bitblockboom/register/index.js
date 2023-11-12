import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import BenefitsModule from "@/components/BenefitsModule";
import bitblockboom from "@/data/content/bitBlockBoom.json";
import sponsors from "@/data/content/sponsors.json";
import Sponsors from "@/components/Sponsors";
import { Check } from "lucide-react";
import Link from "next/link";
import PrizePool from "@/components/PrizePool";
import ButtonPrimary from "@/components/ButtonPrimary";
import Image from "next/image";
import { useState } from "react";
import prisma from "@prisma/client";

export default async function HackathonList() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const router = useRouter();

  const [...teams] = await prisma.post.findMany();

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content, authorEmail };
      await fetch(`/api/post`, {
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
    <Layout>
      <form onSubmit={submitData}>
        <div className="py-4 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ButtonPrimary buttonText={"Back"} buttonLink={"/"} />
            <PageHeader
              headerText={"Confirm Registration for BBB Hackathon"}
              descriptionText={
                "Fill out the form to complete your registration."
              }
            />
            <div className="sm:col-span-3">
              <label
                htmlFor="team"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Team
              </label>
              <div>
                Don't have a team?{" "}
                <Link className="hover:text-lime-600" href="/team">
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
                >
                  <option>Select</option>
                  <option>ZBDream</option>
                </select>
              </div>
            </div>
            <ButtonPrimary buttonText={"Submit"} buttonLink={"/success"} />
          </div>
        </div>
      </form>
    </Layout>
  );
}
