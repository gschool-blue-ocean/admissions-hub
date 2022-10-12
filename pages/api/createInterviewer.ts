import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, password, role } =
    req.body;

  try {
    await prisma.interviewers.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        role
      },
    });
    res.status(200).json({ message: "Interviewer Successfully Entered!" });
  } catch (error) {
    res.status(500).json({ message: "An error occured" });
  }
}
