import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  if (req.method === "POST") {
    try {
      const session = await getServerSession(req, res, config);

      if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // hackathonId
      const {
        query: { id },
      } = req;

      // teamId
      const { team } = req.body;

      const result = await prisma.hackathonRegistration.create({
        data: {
          hackathonId: id,
          teamId: team,
        },
      });
      console.log(result);
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  }
  if (req.method === "GET") {
    try {
      const session = await getServerSession(req, res, config);

      if (!session) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // hackathonId
      const {
        query: { id },
      } = req;

      // teamId
      const { team } = req.body;

      const result = await prisma.hackathonRegistration.create({
        data: {
          hackathonId: id,
          teamId: team,
        },
      });
      console.log(result);
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  }
}
