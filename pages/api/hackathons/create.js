import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await prisma.user.findMany({
      where: {
        email: session.user.email,
      },
    });

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

        creatorId: user[0].id,
      },
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
