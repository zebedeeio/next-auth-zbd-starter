import prisma from "@/lib/prisma";

export default async function handle(req, res) {
  const token = await getToken({ req });
  const { name, description, teamMembers, teamAvatar, creatorId } = req.body;

  const result = await prisma.team.create({
    data: {
      name: name,
      description: description,

      teamMembers: teamMembers,
      teamAvatar: teamAvatar,

      creatorId: creatorId,
    },
  });
  res.json(result);
}
