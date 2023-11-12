import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Layout from "@/components/layout";
import AccessDenied from "@/components/access-denied";
import CreateHackathonForm from "@/components/CreateHackathonForm";

export default function CreateHackathon() {
  const { data: session } = useSession();
  // const [content, setContent] = useState()

  // // Fetch content from protected route
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("/api/examples/protected")
  //     const json = await res.json()
  //     if (json.content) {
  //       setContent(json.content)
  //     }
  //   }
  //   fetchData()
  // }, [session])

  // If session exists and is an admin user, display content
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
