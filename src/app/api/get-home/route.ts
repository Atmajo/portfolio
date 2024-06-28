import { prisma } from "@/app/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const response = await prisma.home.findMany({
      where: {
        status: "published",
      },
    });

    if (response) {
      return NextResponse.json(response);
    }
  } catch (err) {
    return NextResponse.json({ message: "Error Occured" });
  }
}
