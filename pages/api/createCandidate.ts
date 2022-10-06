import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, cohort, notes, Interviews, role } =
    req.body;

  try {
    await prisma.candidates.create({
      data: {
        firstName,
        lastName,
        email,
        cohort,
        notes,
        Interviews,
        role,
      },
    });
    res.status(200).json({ message: "Candidate Successfully Entered!" });
  } catch (error) {
    res.status(500).json({ message: "An error occured" });
  }
}
