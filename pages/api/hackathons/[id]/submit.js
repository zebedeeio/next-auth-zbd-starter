import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  const session = await getServerSession(req, res, config);

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // hackathonId
  const {
    query: { id },
  } = req;

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const teams = await prisma.team.findMany({
    where: {
      creatorId: user.id,
    },
  });

  const registration = await prisma.hackathonRegistration.findMany({
    where: {
      hackathonId: id,
      teamId: teams[0].id,
    },
  });
  console.log(registration);

  if (registration.length === 0) {
    return res.status(404).json({ error: "Registration not found" });
  }

  const teamId = registration[0].teamId;

  const {
    projectName,
    projectDescription,
    loomLink,
    pitchLink,
    projectResourceLink,
    comments,
  } = req.body;

  // Input Validation
  if (!projectName || !projectDescription) {
    return res
      .status(400)
      .json({ error: "Project name and description are required" });
  }

  try {
    const result = await prisma.project.create({
      data: {
        name: projectName,
        description: projectDescription,
        loomLink: loomLink || null,
        pitchLink: pitchLink || null,
        projectResourceLink: projectResourceLink || null,
        comments: comments || null,

        hackathonId: id,
        teamId: teamId,
      },
    });

    res.json(result);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
