import React from "react";
import Sponsors from "@/components/Sponsors";
import sponsors from "@/data/content/sponsors.json"
import Layout from "@/components/layout";
const sponsor = () => {
  return (
  <Layout>
    <Sponsors data={sponsors}></Sponsors>
  </Layout>
  );
};

export default sponsor;
