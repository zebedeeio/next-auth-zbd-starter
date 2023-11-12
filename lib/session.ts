import { getServerSession } from "next-auth";
import { config } from "@/lib/auth";

export default async function getCurrentUser() {
  const session = await getServerSession(config);
  return session?.user;
}
