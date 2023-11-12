import prisma from "@/lib/db";

export default async function handle(req, res) {
  const token = await getToken({ req });
  const { hackathon, team } = req.body;
  const result = await prisma.hackathonregistration.create({
    data: {
      hackathon: hackathon,
      team: team,
    },
  });
  res.json(result);
}
