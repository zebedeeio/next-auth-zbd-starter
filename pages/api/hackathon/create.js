import prisma from "@/lib/prisma";

export default async function handle(req, res) {
  const token = await getToken({ req });
  const {
    title,
    description,
    benefits,
    rules,
    judgingCriteria,
    firstPlacePrize,
    secondPlacePrize,
    thirdPlacePrize,
    startDate,
    endDate,
    creatorId,
  } = req.body;

  const result = await prisma.hackathon.create({
    data: {
      title: title,
      description: description,

      benefits: benefits,
      rules: rules,
      judgingCriteria: judgingCriteria,

      firstPlacePrize: firstPlacePrize,
      secondPlacePrize: secondPlacePrize,
      thirdPlacePrize: thirdPlacePrize,

      startDate: startDate,
      endDate: endDate,

      creatorId: creatorId,
    },
  });
  res.json(result);
}
