import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const {
      query: { hackathonId },
    } = req;

    const { teamId } = req.body;

    console.log(hackathonId);
    console.log(teamId);

    const result = await prisma.hackathonregistration.create({
      data: {
        teamId: teamId,
        hackathonId: hackathonId,
      },
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
