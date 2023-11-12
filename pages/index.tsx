import Layout from "../components/layout";
import HeroModule from "@/components/HeroModule";
import BenefitsModule from "@/components/BenefitsModule";
import Hackathons from "@/components/Hackathons";

import Sponsors from "@/components/Sponsors";
import CallToAction from "@/components/CallToAction";
import developerBenefits from "@/data/content/developerBenefits.json";

import homePage from "@/data/content/homePageCta.json";
import hackathons from "@/data/content/hackathons.json";
import sponsors from "@/data/content/sponsors.json";

export default function IndexPage() {
  return (
    <Layout>
      <HeroModule />

      <BenefitsModule data={developerBenefits} />

      <Hackathons data={hackathons} />

      <Sponsors data={sponsors} />

      <CallToAction data={homePage} />
    </Layout>
  );
}
