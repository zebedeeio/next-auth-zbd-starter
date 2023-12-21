import Layout from "@/components/layout";
import PageHeader from "@/components/PageHeader";
import RegisterTeamForm from "@/components/RegisterTeamForm";
import ButtonSecondary from "@/components/ButtonSecondary";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function HackathonRegistration() {
  const router = useRouter();
  const [id, setId] = useState("");

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id);
    }
  }, [router.isReady]);

  return (
    <Layout>
      <div className="py-4 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ButtonSecondary buttonText={"Back"} buttonLink={"/"} />
          <PageHeader
            headerText={"Confirm Registration for BBB Hackathon"}
            descriptionText={"Fill out the form to complete your registration."}
          />
          <RegisterTeamForm hackathonId={id} />
        </div>
      </div>
    </Layout>
  );
}
