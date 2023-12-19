import prisma from "@/lib/db";

export default async function handle(req, res) {
  try {

    const { name, email, company} = req.body;

    const result = await prisma.sponsors.create({
      data: {
        name,
        email,
        company,
      },
    });

    // Envía la respuesta después de crear el contacto
    res.json(result);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}