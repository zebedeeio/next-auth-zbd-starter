import prisma from "@/lib/db";

export default async function handle(req, res) {
  try {
    const result = await prisma.hackathon.findMany({});
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
