import prisma from "@/lib/db";

export default async function handle(req, res) {
  const token = await getToken({ req });
  const {
    name,
    description,
    loomLink,
    pitchLink,
    projectResourceLink,
    comments,
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
      hackathonId: id,
      teamId: teamId,
    },
  });
  res.json(result);
}
