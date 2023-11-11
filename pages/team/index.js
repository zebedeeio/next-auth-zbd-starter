import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import BenefitsModule from "@/components/BenefitsModule";
import bitblockboom from "@/data/content/bitBlockBoom.json";
import sponsors from "@/data/content/sponsors.json";
import Sponsors from "@/components/Sponsors";
import { Check } from "lucide-react";
import PrizePool from "@/components/PrizePool";
import ButtonPrimary from "@/components/ButtonPrimary";
import HackathonCard from "@/components/HackathonCard";

import Image from "next/image";

export default function HackathonList() {
  return (
    <Layout>
      <div className="py-4 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ButtonPrimary buttonText={"Back"} buttonLink={"/"} />
          <PageHeader
            headerText={"Teams"}
            descriptionText={"Create a team in order to compete in hackathons."}
          />

          <ButtonPrimary buttonText={"Create team"} buttonLink={"/team/create"} />
          <div className="my-8">
            <HackathonCard headerText={"ZBDream"} descriptionText={"A team for the BitBlockBoom hackathon."} />

          </div>

        </div>
        
      </div>
    </Layout>
  );
}
