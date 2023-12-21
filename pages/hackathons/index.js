import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import BenefitsModule from "@/components/BenefitsModule";
import bitblockboom from "@/data/content/bitBlockBoom.json";
import sponsors from "@/data/content/sponsors.json";
import Sponsors from "@/components/Sponsors";
import { Check } from "lucide-react";
import PrizePool from "@/components/PrizePool";
import ButtonSecondary from "@/components/ButtonSecondary";
import Image from "next/image";
import Hackathons from "@/components/Hackathons";
import hackathons from "@/data/content/hackathons.json";

export default function HackathonList() {
  return (
    <Layout>
      <Hackathons data={hackathons} />
    </Layout>
  );
}
