import { useSession } from "next-auth/react";
import Layout from "@/components/layout";
import AccessDenied from "@/components/access-denied";
import CreateHackathonForm from "@/components/CreateHackathonForm";

export default function CreateHackathon() {
  const { data: session } = useSession();

  // If session exists and is an admin user, display content
  // Only allow my email because I am the only one allowed to create hackathons ATM.
  if (session && session.user.email === "f9gr2ch9yz@privaterelay.appleid.com") {
    return (
      <Layout>
        <CreateHackathonForm />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }
}
