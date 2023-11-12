import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import ButtonPrimary from "@/components/ButtonPrimary";
import Image from "next/image";

export default function HackathonList() {
  return (
    <Layout>
      <div className="py-4 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            alt="Success Image"
            src="/smiley.png"
            width={102}
            height={64}
          />
          <div className="text-center">
            <PageHeader
              headerText={"Success!"}
              descriptionText={
                "You've succesfully signed-up for the hackathon."
              }
            />
            <ButtonPrimary buttonText={"Finish"} buttonLink={"/"} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
