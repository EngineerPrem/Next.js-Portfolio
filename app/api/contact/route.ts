// app/api/contact/route.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const saved = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return new Response(JSON.stringify({ success: true, saved }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Something went wrong!" }), { status: 500 });
  }
}
