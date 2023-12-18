import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { config } from "@/lib/auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session || !session.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    
    const { name, email, company, comments } = req.body;

    const user = await prisma.user.findMany({
      where: {
        email: session.user.email,
      },
    });
   console.log(user)

    const result = await prisma.contact.create({
      data: {
        name,
        email,
        company,
        comments,
        creatorId: user[0].id,
      },
    });

    // Envía la respuesta después de crear el contacto
    res.json(result);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
