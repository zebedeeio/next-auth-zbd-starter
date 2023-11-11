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
import Image from "next/image";

export default function HackathonList() {
  return (
    <Layout>
      <div className="py-4 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ButtonPrimary buttonText={"Back"} buttonLink={"/"} />
          <PageHeader
            headerText={"Confirm Sign-Up for BBB Hackathon"}
            descriptionText={
              "Fill out the form to sign-up."
            }
          />
                      <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Team
              </label>
              <div className="mt-2 mb-4">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select</option>
                  <option>ZBDream</option>
                </select>
              </div>
            </div>
          <ButtonPrimary buttonText={"Submit"} buttonLink={"/success"} />

        </div>
      </div>
    </Layout>
  );
}
