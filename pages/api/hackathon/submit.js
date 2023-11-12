import prisma from "@/lib/prisma";

export default async function handle(req, res) {
  const token = await getToken({ req });
  const {
    name,
    description,
    loomLink,
    pitchLink,
    projectResourceLink,
    comments,
    hackathonId,
    teamId,
  } = req.body;

  const result = await prisma.project.create({
    data: {
      name: name,
      description: description,

      loomLink: loomLink,
      pitchLink: pitchLink,
      projectResourceLink: projectResourceLink,

      comments: comments,
      hackathonId: hackathonId,
      teamId: teamId,
    },
  });
  res.json(result);
}
