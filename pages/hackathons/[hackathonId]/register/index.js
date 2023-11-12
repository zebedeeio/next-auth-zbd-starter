import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import RegisterTeamForm from "@/components/RegisterTeamForm";
import ButtonPrimary from "@/components/ButtonPrimary";

export default function HackathonRegistration() {
  return (
    <Layout>
      <div className="py-4 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ButtonPrimary buttonText={"Back"} buttonLink={"/"} />
          <PageHeader
            headerText={"Confirm Registration for BBB Hackathon"}
            descriptionText={"Fill out the form to complete your registration."}
          />
          <RegisterTeamForm />
        </div>
      </div>
    </Layout>
  );
}
