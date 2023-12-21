import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);
    const { teamName, teamDescription, teamAvatarURL, teamMembers } = req.body;

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await prisma.user.findMany({
      where: {
        email: session.user.email,
      },
    });

    const result = await prisma.team.create({
      data: {
        name: teamName,
        description: teamDescription,
        teamAvatar: teamAvatarURL,
        teamMembers: teamMembers,
        creatorId: user[0].id,
      },
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
